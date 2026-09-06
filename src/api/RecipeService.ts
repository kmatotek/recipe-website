import api from './axiosInstance'

const recipeService = {

    // GET all recipes
    getAllRecipes: async () => {
        const response = await api.get('/recipes');
        return response.data;
    },

    // get reciipes by a certain category
    getRecipesByCategory: async (category) => {
        const response = await api.get(`recipes/${category}`)
        return response.data;
    },

    // GET images by category 
    getImagesByCategory: async (category) => {
        const response = await api.get(`recipes/images/${category}`);
        return response.data;
    }
}

export default recipeService;