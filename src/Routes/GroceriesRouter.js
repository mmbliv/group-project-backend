import groceriesController from "../Controllers/GroceriesControllers.js";
import express from 'express'

const groceriesRouter = express.Router();

/**
 * @api {get} /groceries Get All Groceries
 * @apiName AllGroceries
 * @apiGroup GetGroceries
 * 
 * @apiSuccess {String} _id Grocery Id
 * @apiSuccess {String} name Grocery Name
 * @apiSuccess {String} recipe Name of origin recipe
 * @apiSuccess {String} createdAt Timestamp of recipe creation
 * @apiSuccess {String} updatedAt Timestamp of last recipe update
 * @apiSuccess {Number} __v MongoDb V Number
 * @apiSuccess {Boolean} checked Recipe is checked
 * @apiSuccess {Boolean} deleted Recipe is deleted
 * 
 * 
 * @apiSuccessExample Successfull Response
 * [
 *   {
 *     "_id": "64235385ee6b130c429d178b",
 *     "name": "russet potato",
 *     "recipe": "Microwave 10-Minute Loaded Potato",
 *     "createdAt": "2023-03-28T20:52:21.154Z",
 *     "updatedAt": "2023-03-28T22:06:40.123Z",
 *     "__v": 0,
 *     "checked": false
 *   },
 *   {
 *     "_id": "64235e88574c6cb3d9b5ab16",
 *     "name": "salt",
 *     "recipe": "Peanut Butter Oat Energy Balls",
 *     "createdAt": "2023-03-28T21:39:20.752Z",
 *     "updatedAt": "2023-03-28T21:39:20.752Z",
 *     "__v": 0
 *   },
 * ]
 */

groceriesRouter.get("/", groceriesController.getAllGroceries);

/**
 * @api {get} /groceries/:id Gets Groceries by id
 * @apiName GroceriesById
 * @apiGroup GetGroceries
 * 
 * @apiParam {String} _id Grocery id
 * 
 * @apiSuccess {String} _id Grocery -d
 * @apiSuccess {String} name Grocery Name
 * @apiSuccess {String} recipe Name of origin recipe
 * @apiSuccess {String} createdAt Timestamp of recipe creation
 * @apiSuccess {String} updatedAt Timestamp of last recipe update
 * @apiSuccess {Number} __v MongoDb V Number
 * @apiSuccess {Boolean} checked Recipe is checked
 * @apiSuccess {Boolean} deleted Recipe is deleted
 * 
 * @apiSampleRequest /groceries/
 * 
 * @apiSuccessExample Successfull Response
 * [
 *   {
 *     "_id": "64235385ee6b130c429d178b",
 *     "name": "russet potato",
 *     "recipe": "Microwave 10-Minute Loaded Potato",
 *     "createdAt": "2023-03-28T20:52:21.154Z",
 *     "updatedAt": "2023-03-28T22:06:40.123Z",
 *     "__v": 0,
 *     "checked": false
 *   },
 * ]
 */

groceriesRouter.get("/:id", groceriesController.getGroceries);
groceriesRouter.get("/recipe/:id", groceriesController.getRecipebyGrocery);

/**
 * @api {post} /groceries Add a new Grocery to list
 * @apiName AddGrocery
 * @apiGroup AddGrocery
 * 
 * @apiParam {String} name The name of the Grocery item to add
 * @apiParam {String} recipe The name of the recipe
 * 
 * @apiParamExample ExampleBody:
 *  {
 *   "name": "I'm going crazy again",
 *   "recipe": "Recipe Name"
 *  }
 * 
 * @apiSuccess {String} _id Grocery -d
 * @apiSuccess {String} name Grocery Name
 * @apiSuccess {String} recipe Name of origin recipe
 * @apiSuccess {String} createdAt Timestamp of recipe creation
 * @apiSuccess {String} updatedAt Timestamp of last recipe update
 * @apiSuccess {Number} __v MongoDb V Number
 * @apiSuccess {Boolean} checked Recipe is checked
 * @apiSuccess {Boolean} deleted Recipe is deleted
 * 
 * @apiSuccessExample Successfull Response
 *  {
 *   "name": "I'm going crazy again",
 *   "recipe": "Recipe Name",
 *   "_id": "6424c0ad8fda38ec4dc8d086",
 *   "createdAt": "2023-03-29T22:50:21.191Z",
 *   "updatedAt": "2023-03-29T22:50:21.191Z",
 *   "__v": 0
 *  }
 */

groceriesRouter.post("/", groceriesController.createGroceries);
groceriesRouter.put("/:id", groceriesController.updateGroceries);
groceriesRouter.delete("/:id", groceriesController.deleteGroceries);
groceriesRouter.put("/check/:id", groceriesController.updateCheck);
groceriesRouter.put("/delete/:id", groceriesController.updateDelete);

export default groceriesRouter;
