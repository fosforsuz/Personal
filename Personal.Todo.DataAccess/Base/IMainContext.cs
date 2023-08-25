namespace Personal.Todo.DataAccess.Base;

public interface IMainContext
{
    public ITodoCategoryDal TodoCategoryDal { get; }
    public ITodoTaskDal TodoTaskDal { get; }
}