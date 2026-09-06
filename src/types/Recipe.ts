export interface Recipe {
  id: RecipeId;
  name: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface RecipeId {
  timestamp: number;
  creationTime: string;
}

export interface Ingredient {
  quantity: number;
  unit: string;
  name: string;
}

export interface Step {
  step: number;
  instruction: string;
}