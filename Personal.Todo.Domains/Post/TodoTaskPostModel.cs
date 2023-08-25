namespace Personal.Todo.Domains.Post;

public class TodoTaskPostModel
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int Priority { get; set; }
    public DateTime? DueDate { get; set; }
    public int CategoryId { get; set; }
}