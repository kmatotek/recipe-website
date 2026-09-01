using BackendAPI.Models;
using BackendAPI.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

// 1. Bind the settings
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

// 2. Register MongoClient as a SINGLETON (Crucial for robustness)
builder.Services.AddSingleton<IMongoClient>(sp =>
{
    var connectionString = builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString");
    return new MongoClient(connectionString);
});

// 3. Register your custom service
builder.Services.AddSingleton<RecipeService>();
// Note: RecipeService can safely be a Singleton too since it only holds the thread-safe IMongoCollection reference.

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/openapi/v1.json", "BackendAPI v1");
    });
}

app.UseHttpsRedirection();


var booksGroup = app.MapGroup("/recipes");

booksGroup.MapGet("/", async (RecipeService booksService) =>
{
    var books = await booksService.GetAsync();
    return Results.Ok(books);
});

app.Run();
