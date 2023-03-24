import express from 'express';
import recipeControllers from '../Controllers/RecipeController.js';
import multer from'multer';
import path from 'path';

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


//storage for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'uploads/',)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const uploadImage = multer({ storage: storage });

recipeRouter.get('/', recipeControllers.getAllRecipes);
recipeRouter.get('/name/:name', recipeControllers.findRecipeByName);
recipeRouter.get('/:id', recipeControllers.findRecipeById);
recipeRouter.post('/newRecipe', uploadImage.single('img'), recipeControllers.createRecipe);
recipeRouter.put('/:id', recipeControllers.updateRecipe);
recipeRouter.delete('/:id', recipeControllers.deleteRecipe);


export default recipeRouter;