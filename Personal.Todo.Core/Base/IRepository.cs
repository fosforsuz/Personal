using System.Linq.Expressions;
using Personal.Todo.Domains.Base;

namespace Personal.Todo.Core.Base;

public interface IRepository
{

}

public interface IRepository<T> : IRepository where T : IBaseEntity
{
    T? GetById(int id);
    IEnumerable<T> List();
    IEnumerable<T> List(Expression<Func<T, bool>>? predicate);
    void Add(T entity);
    void Update(T entity);
    void Delete(T entity);
    IEnumerable<T> FindAsNoTracking(Expression<Func<T, bool>> predicate);
    IQueryable<T> FindQueryable(Expression<Func<T, bool>> predicate);
}