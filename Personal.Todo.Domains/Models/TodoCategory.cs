using Personal.Todo.Domains.Base;

namespace Personal.Todo.Domains.Models;

public class TodoCategory : IBaseEntity
{
    public int Id { get; set; }

    public string? CategoryName { get; set; }
    public string? CategoryDescription { get; set; }
    public string? CategoryColor { get; set; }

    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public List<TodoTask>? TodoTasks { get; set; }
}