using BackendAPI.Models;
using BackendAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace BackendAPI.Controllers
{
    [Route("api/recipes")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly RecipeService _recipeService;
        public RecipeController(RecipeService recipeService)
        {
            _recipeService = recipeService;
        }


        // get all recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetAllRecipes()
        {
            return Ok(await _recipeService.GetAsync());
        }

        // get all breakfast recipes
        [HttpGet("breakfast")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetAllBreakfastRecipes()
        {
            return Ok(await _recipeService.GetByCategoryAsync("breakfast"));
        }

        // get all dinner recipes
        [HttpGet("dinner")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetAllDinnerRecipes()
        {
            return Ok(await _recipeService.GetByCategoryAsync("dinner"));
        }

        // get all dessert recipes
        [HttpGet("dessert")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetAllDesserthRecipes()
        {
            return Ok(await _recipeService.GetByCategoryAsync("dessert"));
        }

        // get a single recipe by name
        [HttpGet("getByName/{name}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipeByName([FromRoute] string name)
        {
            var recipes = await _recipeService.GetRecipesByName(name);

            if (recipes.Count() == 1) return Ok(recipes);

            return BadRequest("Length of result was not 1");
        }


        // get number of documents for breakfast/dinner/dessert
        [HttpGet("amount/{category}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetNumDocumentsForCategory([FromRoute] string category)
        {
            return Ok(await _recipeService.GetNumOfDocumentsForCategory(category));
        }


        // get all images for a category
        // get number of documents for breakfast/dinner/dessert
        [HttpGet("images/{category}")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetImagePathsForCategory([FromRoute] string category)
        {
            return Ok(await _recipeService.GetImagePathsForCategory(category));
        }

    }
}