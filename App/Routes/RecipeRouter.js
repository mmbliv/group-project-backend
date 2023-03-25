import express from 'express';
import recipeControllers from '../Controllers/RecipeController.js';
import multer from'multer';
import path from 'path';
import fs from 'fs';

const recipeRouter = express.Router();

//storage for multer

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads',)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const dir = './uploads';
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + '-' + file.originalname);
//   },
// });
  
  const uploadImage = multer({ storage: storage });

recipeRouter.get('/', recipeControllers.getAllRecipes);
recipeRouter.get('/name/:name', recipeControllers.findRecipeByName);
recipeRouter.get('/:id', recipeControllers.findRecipeById);
recipeRouter.post('/newRecipe', uploadImage.single('img'), recipeControllers.createRecipe);
recipeRouter.put('/:id', recipeControllers.updateRecipe);
recipeRouter.delete('/:id', recipeControllers.deleteRecipe);


export default recipeRouter;