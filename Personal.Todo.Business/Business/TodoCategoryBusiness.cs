using Personal.Todo.Business.Base;
using Personal.Todo.DataAccess.Base;
using Personal.Todo.Domains.Exception;
using Personal.Todo.Domains.Models;
using Personal.Todo.Domains.Post;
using Personal.Todo.Domains.Return;

namespace Personal.Todo.Business.Business;

public class TodoCategoryBusiness : ITodoCategoryBusiness
{
    private readonly IMainContext _mainContext;

    public TodoCategoryBusiness(IMainContext context)
    {
        _mainContext = context;
    }


    public List<TodoCategories> TodoCategoryGetAll()
    {
        return _mainContext.TodoCategoryDal.List(x => x.IsActive).Select(x => new TodoCategories()
        {
            Id = x.Id,
            CategoryName = x.CategoryName,
            CategoryDescription = x.CategoryDescription,
            CategoryColor = x.CategoryColor
        }).ToList();
    }

    public TodoCategories TodoCategoryGetById(int id)
    {
        var record = _mainContext.TodoCategoryDal.GetById(id);
        if (record is { IsActive: true })
        {
            return new TodoCategories()
            {
                Id = record.Id,
                CategoryName = record.CategoryName,
                CategoryDescription = record.CategoryDescription,
                CategoryColor = record.CategoryColor
            };
        }

        return new TodoCategories();
    }

    public List<TodoCategory> TodoCategoryGetAllWithTasks()
    {
        return _mainContext.TodoCategoryDal.List(x => x.IsActive).ToList();
    }

    public void TodoCategoryCreate(TodoCategoryPostModel todoCategory)
    {

        var record = _mainContext.TodoCategoryDal.List(x => x.CategoryName == todoCategory.CategoryName && x.IsActive).FirstOrDefault();
        if (record is { IsActive: true })
        {
            throw new RecordAlreadyExistException("Category name already exist");
        }

        var entity = new TodoCategory()
        {
            IsActive = true,
            TodoTasks = new List<TodoTask>() { },
            CategoryName = todoCategory.CategoryName,
            CategoryDescription = todoCategory.Description,
            CategoryColor = todoCategory.CategoryColor,
            CreatedAt = DateTime.Now,
            UpdatedAt = DateTime.Now
        };

        _mainContext.TodoCategoryDal.Add(entity);
    }

    public void TodoCategoryUpdate(TodoCategoryPostModel todoCategory, int id)
    {
        var record = _mainContext.TodoCategoryDal.GetById(id);
        if (record is null || !record.IsActive)
        {
            throw new RecordNotFoundException("Category not found");
        }
        var checkCategoryName = _mainContext.TodoCategoryDal.List(x => x.CategoryName == todoCategory.CategoryName && x.IsActive).FirstOrDefault();

        if (checkCategoryName is not null)
        {
            throw new RecordAlreadyExistException("Category name already exist");
        }

        record.CategoryName = todoCategory.CategoryName;
        record.CategoryDescription = todoCategory.Description;
        record.CategoryColor = todoCategory.CategoryColor;
        record.UpdatedAt = DateTime.Now;
        
        _mainContext.TodoCategoryDal.Update(record);

    }

    public bool TodoCategoryDelete(int id)
    {
        try
        {
            var record = _mainContext.TodoCategoryDal.GetById(id);
            if (record is null || !record.IsActive)
            {
                throw new RecordNotFoundException("Category not found");
            }

            record.IsActive = false;
            record.UpdatedAt = DateTime.Now;
            _mainContext.TodoCategoryDal.Update(record);
            return true;
        }
        catch (Exception)
        {
            return false;
        }
    }
}