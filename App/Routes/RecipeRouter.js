import express from 'express';
import recipes from '../Controllers/RecipeController.js'

const recipeRouter = express.Router();

const getAllRecipes = async (req, res, next) => {
    recipes.findAllRecipes(req.body)
    .then(recipe => res.json(recipe))
    .catch(err => next(err));
}

const getRecipebyName = async (req, res, next) => {
    recipes.findRecipeByName(req.body, req.params.name)
   .then(recipe => res.json(recipe))
}

const getRecipeById = async (req, res, next) => {
    recipes.findRecipeById(req.params.id)
    .then(recipe => res.json(recipe))
}

 const createRecipe = async (req, res, next) => {
    recipes.createRecipe(req.body)
    .then(recipe => res.json(recipe))
 }

 const updateRecipe = async (req, res, next) => {
    recipes.updateRecipe(req.params.id, req.body)
   .then(recipe => res.json(recipe))
 }

const deleteRecipe = async (req, res, next) => {
    recipes.deleteRecipe(req.params.id)
  .then(recipe => res.json(recipe))
    
}    

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/recipe-name/:name', getRecipebyName);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);


export default recipeRouter;