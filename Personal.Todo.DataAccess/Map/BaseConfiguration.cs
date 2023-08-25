using System.Data.Entity.ModelConfiguration;
using Personal.Todo.Domains.Base;

namespace Personal.Todo.DataAccess.Map;

public interface ITodoConfiguration
{
    
}

public class BaseConfiguration<T> : EntityTypeConfiguration<T> where T : class, IEntity
{
    public BaseConfiguration() {}
}