using Microsoft.Extensions.Options;
using MongoDB.Driver;
using BackendAPI.Models;

namespace BackendAPI.Services;

public class RecipeService
{
    private readonly IMongoCollection<Recipe> _recipesCollection;

    // The client is injected here as a singleton
    public RecipeService(IMongoClient mongoClient, IOptions<MongoDbSettings> settings)
    {
        var database = mongoClient.GetDatabase(settings.Value.DatabaseName);
        _recipesCollection = database.GetCollection<Recipe>("recipes");
    }

    public async Task<List<Recipe>> GetAsync() =>
        await _recipesCollection.Find(_ => true).ToListAsync();
}
