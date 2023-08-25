using Personal.Todo.Core.Base;
using Personal.Todo.Domains.Models;

namespace Personal.Todo.DataAccess.Base;

public interface ITodoTaskDal : IRepository<TodoTask>
{
    
}