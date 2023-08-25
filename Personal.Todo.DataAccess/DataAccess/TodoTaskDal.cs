using System.Linq.Expressions;
using Personal.Todo.Core.DataAccess;
using Personal.Todo.DataAccess.Base;
using Personal.Todo.DataAccess.Context;
using Personal.Todo.Domains.Models;

namespace Personal.Todo.DataAccess.DataAccess;

public class TodoTaskDal : Repository<TodoTask, TodoRepositoryContext>, ITodoTaskDal
{

}