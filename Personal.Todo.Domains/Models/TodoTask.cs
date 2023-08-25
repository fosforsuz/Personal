using Personal.Todo.Domains.Base;

namespace Personal.Todo.Domains.Models;

public class TodoTask : IBaseEntity
{
    public int Id { get; set; }

    public string? TaskName { get; set; }
    public string? TaskDescription { get; set; }
    public int Priority { get; set; }
    public DateTime? DueDate { get; set; }
    public bool IsCompleted { get; set; }

    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public int CategoryId { get; set; }
    public TodoCategory Category { get; set; } = default!;
}