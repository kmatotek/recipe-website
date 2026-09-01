namespace BackendAPI.Models
{
    public class Ingredient
    {
        public double Quantity { get; set; }
        public string Unit { get; set; } = String.Empty;
        public string Name { get; set; } = String.Empty;
    }
}