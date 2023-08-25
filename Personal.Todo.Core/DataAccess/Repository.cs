using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Personal.Todo.Core.Base;
using Personal.Todo.Domains.Base;

namespace Personal.Todo.Core.DataAccess;

public class Repository<TEntity, TContext> : IRepository<TEntity> where TEntity : class, IBaseEntity, new()
    where TContext : DbContext, IDisposable, new()
{

    public TEntity? GetById(int id)
    {
        var context = new TContext();
        return context.Set<TEntity>().Find(id);
    }

    public IEnumerable<TEntity> List()
    {
        using var context = new TContext();
        return context.Set<TEntity>().ToList();
    }

    public IEnumerable<TEntity> List(Expression<Func<TEntity, bool>>? predicate)
    {
        using var context = new TContext();
        return predicate!= null ? context.Set<TEntity>().Where(predicate).ToList() : context.Set<TEntity>().ToList();
    }

    public void Add(TEntity entity)
    {
        using var context = new TContext();
        var addedEntity = context.Entry(entity);
        addedEntity.State = EntityState.Added;
        context.SaveChanges();
    }

    public void Update(TEntity entity)
    {
        using var context = new TContext();
        var updatedEntity = context.Entry(entity);
        updatedEntity.State = EntityState.Modified;
        context.SaveChanges();
    }

    public void Delete(TEntity entity)
    {
        using var context = new TContext();
        var deletedEntity = context.Entry(entity);
        deletedEntity.State = EntityState.Deleted;
        context.SaveChanges();
    }

    public IEnumerable<TEntity> FindAsNoTracking(Expression<Func<TEntity, bool>> predicate)
    {
        var context = new TContext();
        return context.Set<TEntity>().AsNoTracking().Where(predicate).ToList();
    }

    public IQueryable<TEntity> FindQueryable(Expression<Func<TEntity, bool>> predicate)
    {
        var context = new TContext();
        return context.Set<TEntity>().Where(predicate);
    }

}