using Personal.Todo.Business.Base;

namespace Personal.Todo.Business;

public class MainService : IMainService
{
    private readonly Lazy<ITodoCategoryBusiness> _todoCategoryBusinessLazy;
    private readonly Lazy<ITodoTaskBusiness> _todoTaskBusinessLazy;

    public MainService(ITodoCategoryBusiness todoCategoryBusiness, ITodoTaskBusiness todoTaskBusiness)
    {
        _todoCategoryBusinessLazy = new Lazy<ITodoCategoryBusiness>(() => todoCategoryBusiness);
        _todoTaskBusinessLazy = new Lazy<ITodoTaskBusiness>(() => todoTaskBusiness);
    }

    public ITodoCategoryBusiness TodoCategoryService => _todoCategoryBusinessLazy.Value;
    public ITodoTaskBusiness TodoItemService => _todoTaskBusinessLazy.Value;
}