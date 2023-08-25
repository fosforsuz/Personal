using Personal.Todo.Business;
using Personal.Todo.Business.Base;
using Personal.Todo.Business.Business;
using Personal.Todo.DataAccess;
using Personal.Todo.DataAccess.Base;
using Personal.Todo.DataAccess.Context;
using Personal.Todo.DataAccess.DataAccess;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        optionsBuilder =>
        {
            optionsBuilder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

using (var client = new TodoRepositoryContext())
{
    var connectionString = builder.Configuration.GetConnectionString("DataConnection");
    TodoRepositoryContext.SetConnectionString(connectionString);
    client.Database.EnsureCreated();
}

builder.Services.AddSession();
builder.Services.AddDistributedMemoryCache();

builder.Services.AddScoped<ITodoCategoryDal, TodoCategoryDal>();
builder.Services.AddScoped<ITodoTaskDal, TodoTaskDal>();

builder.Services.AddScoped<ITodoCategoryBusiness, TodoCategoryBusiness>();
builder.Services.AddScoped<ITodoTaskBusiness, TodoTaskBusiness>();

builder.Services.AddScoped<IMainContext, MainContext>();
builder.Services.AddScoped<IMainService, MainService>();

var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
