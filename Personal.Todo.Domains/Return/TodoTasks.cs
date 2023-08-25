namespace Personal.Todo.Domains.Return;

public class TodoTasks
{
    public int Id { get; set; }
    public string? TaskName { get; set; }
    public string? TaskDescription { get; set; }
    public int Priority { get; set; }
    public DateTime? DueDate { get; set; }
    public bool IsCompleted { get; set; }

    public int CategoryId { get; set; }
}