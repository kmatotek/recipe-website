using MongoDB.Bson;

namespace BackendAPI.Models
{
    public class Recipe
    {
        public ObjectId Id { get; set; } // this maps to _id in mongo db atlas by default
        public string Name { get; set; } = String.Empty;
        public string Title { get; set; } = String.Empty;
        public string Description { get; set; } = String.Empty;
        public string Category { get; set; } = String.Empty;

        public List<string>? Tags { get; set; }
        public string Image { get; set; } = String.Empty;
        public int PrepTime { get; set; }
        public int CookTime { get; set; }
        public int Servings { get; set; }

        public List<Ingredient>? Ingredients { get; set; }
        public List<Step>? Steps { get; set; }



    }
}