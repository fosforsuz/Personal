namespace Personal.Todo.Domains.Base;

public interface IEntity
{
    
}

public interface IBaseEntity : IEntity
{
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}