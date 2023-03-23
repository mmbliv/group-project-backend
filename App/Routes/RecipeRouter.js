import express from 'express';
import recipeControllers from '../Controllers/RecipeController.js';
// import recipes from '../Controllers/RecipeController.js'


const recipeRouter = express.Router();

// const getAllRecipes = async (req, res, next) => {
//     recipes.findAllRecipes(req.body)
//     .then(recipe => res.json(recipe))
//     .catch(err => next(err));
// }

// const getRecipebyName = async (req, res, next) => {
//     recipes.findRecipeByName(req.params.name)
//    .then(recipe => res.json(recipe))
// }

// const getRecipeById = async (req, res, next) => {
//     recipes.findRecipeById(req.params.id)
//     .then(recipe => res.json(recipe))
// }

// const createRecipe = async (req, res, next) => {
//     recipes.createRecipe(req.body,)
//   .then(recipe => res.json(recipe))
//  }

//  const updateRecipe = async (req, res, next) => {
//     recipes.updateRecipe(req.params.id, req.body)
//    .then(recipe => res.json(recipe))
//  }

// const deleteRecipe = async (req, res, next) => {
//     recipes.deleteRecipe(req.params.id, req.body)
//   .then(recipe => res.json(recipe))
    
// }    

recipeRouter.get('/', recipeControllers.getAllRecipes);
recipeRouter.get('/name/:name', recipeControllers.findRecipeByName);
recipeRouter.get('/:id', recipeControllers.findRecipeById);
recipeRouter.post('/', recipeControllers.createRecipe);
recipeRouter.put('/:id', recipeControllers.updateRecipe);
recipeRouter.delete('/:id', recipeControllers.deleteRecipe);


export default recipeRouter;