import groceriesController from "../Controllers/GroceriesControllers.js";
import express from 'express'

const groceriesRouter = express.Router();

groceriesRouter.get("/", groceriesController.getAllGroceries);
groceriesRouter.get("/:id", groceriesController.getGroceries);
groceriesRouter.get("/recipe/:id", groceriesController.getRecipebyGrocery);
groceriesRouter.post("/", groceriesController.createGroceries);
groceriesRouter.put("/:id", groceriesController.updateGroceries);
groceriesRouter.delete("/:id", groceriesController.deleteGroceries);
groceriesRouter.put("/check/:id", groceriesController.updateCheck);
groceriesRouter.put("/delete/:id", groceriesController.updateDelete);

export default groceriesRouter;
