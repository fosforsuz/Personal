namespace Personal.Todo.Business.Base;

public interface IMainService
{
    ITodoCategoryBusiness TodoCategoryService { get; }
    ITodoTaskBusiness TodoItemService { get; }
}