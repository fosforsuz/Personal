using Personal.Todo.Business.Base;
using Personal.Todo.DataAccess.Base;
using Personal.Todo.Domains.Exception;
using Personal.Todo.Domains.Models;
using Personal.Todo.Domains.Post;
using Personal.Todo.Domains.Return;

namespace Personal.Todo.Business.Business;

public class TodoTaskBusiness : ITodoTaskBusiness
{
    private readonly IMainContext _mainContext;

    public TodoTaskBusiness(IMainContext context)
    {
        _mainContext = context;
    }


    public List<TodoTask> TodoTaskGetAll()
    {
        return _mainContext.TodoTaskDal.List(x => x.IsActive).ToList();
    }

    public List<TodoTasks> TodoTaskGetWithDateList(string date)
    {
        try
        {
            var dateValue = DateTime.ParseExact(date, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture);
            return _mainContext.TodoTaskDal.List(x => x.IsActive && x.CreatedAt == dateValue).Select(x => new TodoTasks
            {
                Id = x.Id,
                TaskName = x.TaskName,
                TaskDescription = x.TaskDescription,
                Priority = x.Priority,
                IsCompleted = x.IsCompleted,
                CategoryId = x.CategoryId,
                DueDate = x.DueDate
            }).ToList();
        }
        catch (Exception)
        {
            throw new DatabaseSelectException("Error while selecting record");
        }
    }


    public TodoTask? TodoTaskGetById(int id)
    {
        var record = _mainContext.TodoTaskDal.GetById(id);
        return record is { IsActive: true } ? record : null;
    }

    public List<TodoTasks> TodoTaskGetByCategoryId(int id)
    {
        return _mainContext.TodoTaskDal.List(x => x.IsActive && x.CategoryId == id).Select(x => new TodoTasks
        {
            Id = x.Id,
            TaskName = x.TaskName,
            TaskDescription = x.TaskDescription,
            Priority = x.Priority,
            IsCompleted = x.IsCompleted,
            CategoryId = id,
            DueDate = x.DueDate
        }).ToList();
    }

    public List<TodoTask> TodoTaskGetByCategoryIdWithDate(int id, string date)
    {
        try
        {
            var dateValue = DateTime.ParseExact(date, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture);
            return _mainContext.TodoTaskDal.List(x => x.IsActive && x.CategoryId == id && x.CreatedAt == dateValue)
                .ToList();
        }
        catch (Exception)
        {
            throw new DatabaseSelectException("Error while selecting record");
        }
    }

    public List<TodoTask> TodoTaskGetByPriority(int priority)
    {
        return _mainContext.TodoTaskDal.List(x => x.IsActive && x.Priority == priority).ToList();
    }

    public List<TodoTask> TodoTaskGetByPriorityWithDate(int priority, string date)
    {
        try
        {
            var dateValue = DateTime.ParseExact(date, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture);
            return _mainContext.TodoTaskDal.List(x => x.IsActive && x.Priority == priority && x.CreatedAt == dateValue)
                .ToList();
        }
        catch (Exception)
        {
            throw new DatabaseSelectException("Error while selecting record");
        }
    }

    public List<TodoTask> TodoTaskGetByPriorityWithDateAndCategoryId(int priority, string date, int categoryId)
    {
        try
        {
            var dateValue = DateTime.ParseExact(date, "yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture);
            return _mainContext.TodoTaskDal.List(x =>
                    x.IsActive && x.Priority == priority && x.CreatedAt == dateValue && x.CategoryId == categoryId)
                .ToList();
        }
        catch (Exception)
        {
            throw new DatabaseSelectException("Error while selecting record");
        }
    }

    public List<TodoTask> TodoTaskGetByPriorityAndCategoryId(int priority, int categoryId)
    {
        return _mainContext.TodoTaskDal.List(x => x.IsActive && x.Priority == priority && x.CategoryId == categoryId)
            .ToList();
    }

    public void TodoTaskCreate(TodoTaskPostModel todoTask)
    {
        var entity = new TodoTask
        {
            TaskName = todoTask.Title,
            TaskDescription = todoTask.Description,
            CategoryId = todoTask.CategoryId,
            IsActive = true,
            CreatedAt = DateTime.Now,
            UpdatedAt = DateTime.Now,
            IsCompleted = false,
            Priority = todoTask.Priority,
        };

        var record = _mainContext.TodoCategoryDal.GetById(todoTask.CategoryId);
        if (record is null || !record.IsActive)
        {
            throw new RecordNotFoundException("Category not found");
        }

        try
        {
            if (record.TodoTasks is not null)
                record.TodoTasks?.Add(entity);
            else
                record.TodoTasks = new List<TodoTask>() { entity };
            _mainContext.TodoCategoryDal.Update(record);
            _mainContext.TodoTaskDal.Add(entity);
        }
        catch (Exception)
        {
            throw new DatabaseInsertException("Error while inserting record");
        }
    }

    public void TodoTaskUpdate(TodoTaskPostModel todoTask)
    {
        var record = _mainContext.TodoTaskDal.GetById(todoTask.Id);
        if (record is null || !record.IsActive)
        {
            throw new RecordNotFoundException("Record not found");
        }

        record.TaskName = todoTask.Title;
        record.TaskDescription = todoTask.Description;
        record.CategoryId = todoTask.CategoryId;
        record.UpdatedAt = DateTime.Now;
        record.Priority = todoTask.Priority;

        var categoryRecord = _mainContext.TodoCategoryDal.GetById(todoTask.CategoryId);
        if (categoryRecord is null || !categoryRecord.IsActive)
        {
            throw new RecordNotFoundException("Category not found");
        }

        try
        {
            _mainContext.TodoTaskDal.Update(record);
        }
        catch (Exception)
        {
            throw new DatabaseUpdateException("Error while updating record");
        }
    }

    public bool TodoTaskDelete(int id)
    {
        try
        {
            var record = _mainContext.TodoTaskDal.GetById(id);
            if (record is null || !record.IsActive)
            {
                throw new RecordNotFoundException("Record not found");
            }

            record.IsActive = false;
            _mainContext.TodoTaskDal.Update(record);
            return true;
        }
        catch (Exception)
        {
            throw new DatabaseDeleteException("Error while deleting record");
        }
    }
}