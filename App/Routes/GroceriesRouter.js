import groceriesController from "../Controllers/GroceriesControllers.js";
import express from 'express'

const groceriesRouter = express.Router();

groceriesRouter.get("/", groceriesController.getAllGroceries);
groceriesRouter.get("/:id", groceriesController.getGroceries);
groceriesRouter.get("/recipe", groceriesController.getRecipebyGroceries);
groceriesRouter.post("/", groceriesController.createGroceries);
groceriesRouter.put("/:id", groceriesController.updateGroceries);
groceriesRouter.delete("/:id", groceriesController.deleteGroceries);

export default groceriesRouter;
