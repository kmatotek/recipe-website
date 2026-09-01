using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace BackendAPI.Models
{
    public class Step
    {
        [BsonElement("Step")]
        [JsonPropertyName("Step")]
        public int StepNumber { get; set; }
        public string Instruction { get; set; } = String.Empty;
    }
}