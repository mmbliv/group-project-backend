import express from "express";
import recipeControllers from "../Controllers/RecipeController.js";
import recipes from "../Controllers/RecipeController.js";
import multer from "multer";
const upload = multer({
  dest: "uploads/",
});

const recipeRouter = express.Router();


recipeRouter.get("/", recipeControllers.getAllRecipes);
recipeRouter.get("/name/:name", recipeControllers.findRecipeByName);
recipeRouter.get("/redirect/:name", recipeControllers.redirectToRecipe);
recipeRouter.get("/:id", recipeControllers.findRecipeById);
recipeRouter.post("/", recipeControllers.createRecipe);
recipeRouter.put("/:id", recipeControllers.updateRecipe);
recipeRouter.delete("/:id", recipeControllers.deleteRecipe);

export default recipeRouter;
