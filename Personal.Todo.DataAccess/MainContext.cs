using Personal.Todo.DataAccess.Base;
using Personal.Todo.DataAccess.DataAccess;

namespace Personal.Todo.DataAccess;

public class MainContext : IMainContext
{
    private readonly Lazy<ITodoCategoryDal> _todoCategoryDalLazy;
    private readonly Lazy<ITodoTaskDal> _todoTaskDalLazy;

    public MainContext(ITodoCategoryDal categoryDal, ITodoTaskDal taskDal)
    {
        _todoCategoryDalLazy = new Lazy<ITodoCategoryDal>(() => categoryDal);
        _todoTaskDalLazy = new Lazy<ITodoTaskDal>(() => taskDal);
    }

    public ITodoCategoryDal TodoCategoryDal => _todoCategoryDalLazy.Value;

    public ITodoTaskDal TodoTaskDal => _todoTaskDalLazy.Value;
}