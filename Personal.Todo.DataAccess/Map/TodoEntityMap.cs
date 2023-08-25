using System.ComponentModel.DataAnnotations.Schema;
using Personal.Todo.Domains.Models;

namespace Personal.Todo.DataAccess.Map;

public class TodoCategoryConfiguration : BaseConfiguration<TodoCategory>, ITodoConfiguration
{
    public TodoCategoryConfiguration()
    {
        ToTable("TodoCategory");

        Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

        Property(x => x.CategoryName).IsRequired();
        HasIndex(x => x.CategoryName).IsUnique();

        Property(x => x.CategoryDescription).IsOptional();
        Property(x => x.CategoryColor).IsOptional();

        Property(x => x.IsActive).IsRequired();
        Property(x => x.CreatedAt).IsRequired();
        Property(x => x.UpdatedAt).IsRequired();

        // Define 1-to-many relationship with TodoTask
        HasMany<TodoTask>(i => i.TodoTasks)
            .WithRequired(i => i.Category!)
            .HasForeignKey(i => i.CategoryId);

    }
}

public class TodoTaskConfiguration : BaseConfiguration<TodoTask>, ITodoConfiguration
{
    public TodoTaskConfiguration()
    {
        ToTable("ToTask");

        Property(i => i.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

        Property(i => i.TaskName).IsRequired();
        Property(i => i.TaskDescription).IsOptional();
        Property(i => i.Priority).IsRequired();
        Property(i => i.DueDate).IsOptional();
        Property(i => i.IsCompleted).IsRequired();

        Property(i => i.IsActive).IsRequired();
        Property(i => i.CreatedAt).IsRequired();
        Property(i => i.UpdatedAt).IsRequired();

        HasRequired<TodoCategory>(i => i.Category!)
            .WithMany(i => i.TodoTasks)
            .HasForeignKey(i => i.CategoryId);

    }
}   