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

    public async Task<List<Recipe>> GetByCategoryAsync(string category)
    {
        return await _recipesCollection.Find(recipe => recipe.Category.Equals(category)).ToListAsync();
    }

    public async Task<long> GetNumOfDocumentsForCategory(string category)
    {
        return await _recipesCollection.CountDocumentsAsync(recipe => recipe.Category.Equals(category));
    }

    // Get recipe by the 'Name' field
    public async Task<List<Recipe>> GetRecipesByName(string name)
    {
        return await _recipesCollection.Find(recipe => recipe.Name.Equals(name)).ToListAsync();
    }

    // get image paths for a category
    public async Task<List<string>> GetImagePathsForCategory(string category)
    {
        List<Recipe> recipes = await GetByCategoryAsync(category);

        return recipes.Select(recipe => recipe.Image).ToList();
    }
}
