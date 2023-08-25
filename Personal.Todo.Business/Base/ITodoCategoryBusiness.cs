using Personal.Todo.Domains.Models;
using Personal.Todo.Domains.Post;
using Personal.Todo.Domains.Return;

namespace Personal.Todo.Business.Base;

public interface ITodoCategoryBusiness
{
    List<TodoCategories> TodoCategoryGetAll();
    TodoCategories TodoCategoryGetById(int id);
    List<TodoCategory> TodoCategoryGetAllWithTasks();
    void TodoCategoryCreate(TodoCategoryPostModel todoCategory);
    void TodoCategoryUpdate(TodoCategoryPostModel todoCategory, int id);
    bool TodoCategoryDelete(int id);
}