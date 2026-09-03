import api from './axiosInstance'

const recipeService = {

    // GET all recipes

    getAllRecipes: async () => {
        const response = await api.get('/recipes');
        return response.data;
    }
}

export default recipeService;