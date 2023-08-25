using Personal.Todo.Domains.Models;
using Personal.Todo.Domains.Post;
using Personal.Todo.Domains.Return;

namespace Personal.Todo.Business.Base;

public interface ITodoTaskBusiness
{
    List<TodoTask> TodoTaskGetAll();
    TodoTask? TodoTaskGetById(int id);
    List<TodoTasks> TodoTaskGetByCategoryId(int id);
    List<TodoTasks> TodoTaskGetWithDateList(string date);
    List<TodoTask> TodoTaskGetByCategoryIdWithDate(int id, string date);
    List<TodoTask> TodoTaskGetByPriority(int priority);
    List<TodoTask> TodoTaskGetByPriorityWithDate(int priority, string date);
    List<TodoTask> TodoTaskGetByPriorityWithDateAndCategoryId(int priority, string date, int categoryId);
    List<TodoTask> TodoTaskGetByPriorityAndCategoryId(int priority, int categoryId);
    void TodoTaskCreate(TodoTaskPostModel todoTask);
    void TodoTaskUpdate(TodoTaskPostModel todoTask);
    bool TodoTaskDelete(int id);
}