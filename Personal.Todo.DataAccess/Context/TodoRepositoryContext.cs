using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Personal.Todo.DataAccess.Map;
using Personal.Todo.Domains.Exception;
using Personal.Todo.Domains.Models;

namespace Personal.Todo.DataAccess.Context;

public class TodoRepositoryContext : DbContext
{
    private static string? ConnectionString { get; set; }

    public static void SetConnectionString(string? connectionString)
    {
        if (string.IsNullOrEmpty(ConnectionString))
        {
            ConnectionString = connectionString;
        }
        else
        {
            throw new ConnectionStringException("Connection String already setting");
        }
    }

    public static SqlConnection GetSqlConnection()
    {
        if (string.IsNullOrEmpty(ConnectionString))
        {
            throw new ConnectionStringException("Connection String not setting");
        }

        return new SqlConnection(ConnectionString);
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (string.IsNullOrEmpty(ConnectionString))
        {
            throw new ConnectionStringException("Connection String not setting");
        }

        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer(ConnectionString, providerOptions => providerOptions.CommandTimeout(60));
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(TodoCategoryConfiguration).Assembly);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(TodoTaskConfiguration).Assembly);
    }

    public DbSet<TodoCategory>? TodoCategory { get; set; }
    public DbSet<TodoTask>? TodoTask { get; set; }
}