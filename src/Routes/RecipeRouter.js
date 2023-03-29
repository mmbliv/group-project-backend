import express from "express";
import recipeControllers from "../Controllers/RecipeController.js";
import recipes from "../Controllers/RecipeController.js";
import multer from "multer";

const upload = multer({
  dest: "uploads/",
});

const recipeRouter = express.Router();

/**
 * @api {get} /recipes Get All Recipes
 * 
 * @apiName GetAllRecipes
 * @apiGroup GetRecipes
 * 
 * @apiSuccess {String} _id Recipe Id
 * @apiSuccess {String} name Recipe Name
 * @apiSuccess {Obejct[]} instructions Instructions for the recipe
 * @apiSuccess {String[]} description Description for the recipe
 * @apiSuccess {String[]} components Ingredients for the recipe
 * @apiSuccess {Number} cook_time_minutes Cook time for the recipe
 * @apiSuccess {String} img Image URL for the recipe
 * @apiSuccess {Number} __v MongoDb V Number
 * 
 * 
 * @apiSuccessExample Successfull Response
 * [
 *   {
 *     "_id": "6423536e95b6cf5919b62441",
 *     "name": "Almond Butter Honey Oat Bars",
 *     "instruction": [
 *        {
 *          "position": 1,
 *          "display_text": "In a medium bowl, add oats, nut butter, and honey or maple syrup, and mix until well combined.",
 *          "_id": "6423536e95b6cf5919b62442"
 *        },
 *        {
 *          "position": 2,
 *          "display_text": "Spray baking dish with cooking spray. Pour in mixture and spread evenly.",
 *          "_id": "6423536e95b6cf5919b62443"
 *        },
 *        {
 *          "position": 3,
 *          "display_text": "Cover and place in freezer until firm.",
 *          "_id": "6423536e95b6cf5919b62444"
 *        },
 *        {
 *          "position": 4,
 *          "display_text": "Cut into bars. Keep in the fridge until ready to eat.",
 *          "_id": "6423536e95b6cf5919b62445"
 *        },
 *        {
 *          "position": 5,
 *          "display_text": "Enjoy!",
 *          "_id": "6423536e95b6cf5919b62446"
 *       
 *     ],
 *     "description": null,
 *     "components": [
 *       "rolled oats",
 *       "almond butter",
 *       "honey"
 *     ],
 *     "cook_time_minutes": null,
 *     "img": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d21894ee3bfb43b0bacf7924135f0fee/BFV30507_Kid-FriendlyBreakfastMealPrep.jpg",
 *     "__v": 0
 *  },
 * ]
 */

recipeRouter.get("/", recipeControllers.getAllRecipes);

/**
 * @api {get} /recipes/name/:name Get Recipe by name
 * @apiName GetRecipeByName
 * @apiGroup GetRecipes
 * 
 * @apiParam {string} name The name of the recipe
 * 
 * @apiSuccess {String} _id Recipe Id
 * @apiSuccess {String} name Recipe Name
 * @apiSuccess {Obejct[]} instructions Instructions for the recipe
 * @apiSuccess {String[]} description Description for the recipe
 * @apiSuccess {String[]} components Ingredients for the recipe
 * @apiSuccess {Number} cook_time_minutes Cook time for the recipe
 * @apiSuccess {String} img Image URL for the recipe
 * @apiSuccess {Number} __v MongoDb V Number
 * 
 * @apiSampleRequest /recipes/name/:name
 * 
 * @apiSuccessExample Successfull Response
 * [
 *   {
 *     "_id": "6423536e95b6cf5919b62441",
 *     "name": "Almond Butter Honey Oat Bars",
 *     "instruction": [
 *        {
 *          "position": 1,
 *          "display_text": "In a medium bowl, add oats, nut butter, and honey or maple syrup, and mix until well combined.",
 *          "_id": "6423536e95b6cf5919b62442"
 *        },
 *        {
 *          "position": 2,
 *          "display_text": "Spray baking dish with cooking spray. Pour in mixture and spread evenly.",
 *          "_id": "6423536e95b6cf5919b62443"
 *        },
 *        {
 *          "position": 3,
 *          "display_text": "Cover and place in freezer until firm.",
 *          "_id": "6423536e95b6cf5919b62444"
 *        },
 *        {
 *          "position": 4,
 *          "display_text": "Cut into bars. Keep in the fridge until ready to eat.",
 *          "_id": "6423536e95b6cf5919b62445"
 *        },
 *        {
 *          "position": 5,
 *          "display_text": "Enjoy!",
 *          "_id": "6423536e95b6cf5919b62446"
 *       
 *     ],
 *     "description": null,
 *     "components": [
 *       "rolled oats",
 *       "almond butter",
 *       "honey"
 *     ],
 *     "cook_time_minutes": null,
 *     "img": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d21894ee3bfb43b0bacf7924135f0fee/BFV30507_Kid-FriendlyBreakfastMealPrep.jpg",
 *     "__v": 0
 *  },
 * ]
 */

recipeRouter.get("/name/:name", recipeControllers.findRecipeByName);



recipeRouter.get("/redirect/:name", recipeControllers.redirectToRecipe);

/**
 * @api {get} /recipes/:id Get Recipe by id
 * @apiName GetRecipeById
 * @apiGroup GetRecipes
 * 
 * @apiParam {string} _id The id of the recipe
 * 
 * @apiSuccess {String} _id Recipe Id
 * @apiSuccess {String} name Recipe Name
 * @apiSuccess {Obejct[]} instructions Instructions for the recipe
 * @apiSuccess {String[]} description Description for the recipe
 * @apiSuccess {String[]} components Ingredients for the recipe
 * @apiSuccess {Number} cook_time_minutes Cook time for the recipe
 * @apiSuccess {String} img Image URL for the recipe
 * @apiSuccess {Number} __v MongoDb V Number
 * 
 * @apiSampleRequest /recipes/:id
 * 
 * @apiSuccessExample Successfull Response
 * [
 *   {
 *     "_id": "6423536e95b6cf5919b62441",
 *     "name": "Almond Butter Honey Oat Bars",
 *     "instruction": [
 *        {
 *          "position": 1,
 *          "display_text": "In a medium bowl, add oats, nut butter, and honey or maple syrup, and mix until well combined.",
 *          "_id": "6423536e95b6cf5919b62442"
 *        },
 *        {
 *          "position": 2,
 *          "display_text": "Spray baking dish with cooking spray. Pour in mixture and spread evenly.",
 *          "_id": "6423536e95b6cf5919b62443"
 *        },
 *        {
 *          "position": 3,
 *          "display_text": "Cover and place in freezer until firm.",
 *          "_id": "6423536e95b6cf5919b62444"
 *        },
 *        {
 *          "position": 4,
 *          "display_text": "Cut into bars. Keep in the fridge until ready to eat.",
 *          "_id": "6423536e95b6cf5919b62445"
 *        },
 *        {
 *          "position": 5,
 *          "display_text": "Enjoy!",
 *          "_id": "6423536e95b6cf5919b62446"
 *       
 *     ],
 *     "description": null,
 *     "components": [
 *       "rolled oats",
 *       "almond butter",
 *       "honey"
 *     ],
 *     "cook_time_minutes": null,
 *     "img": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/d21894ee3bfb43b0bacf7924135f0fee/BFV30507_Kid-FriendlyBreakfastMealPrep.jpg",
 *     "__v": 0
 *  },
 * ]
 */


recipeRouter.get("/:id", recipeControllers.findRecipeById);

/**
 * @api {post} /recipes Add a Recipe
 * @apiName AddRecipe
 * @apiGroup AddRecipes
 * 
 * @apiParam {String} name Recipe Name, is required
 * @apiParam {Obejct[]} instructions Instructions for the recipe
 * @apiParam {String[]} description Description for the recipe
 * @apiParam {String[]} components Ingredients for the recipe
 * @apiParam {Number} cook_time_minutes Cook time for the recipe
 * @apiParam {String} img Image URL for the recipe
 * 
 * @apiParamExample Example Body:
 * {
 *  "name":"Test Name",
 *    "instruction":[{
 *      "position": 1,
 *      "display_text": "example"
 *  }],
 *    "description":["example"],
 *    "components": ["Example1","Example2"],
 *    "cook_time_minutes": 30,
 *    "img": "URL"
 *  }
 * 
 * @apiSuccess {Number} _id Recipe Id
 * @apiSuccess {String} name Recipe Name
 * @apiSuccess {Obejct[]} instructions Instructions for the recipe
 * @apiSuccess {String[]} description Description for the recipe
 * @apiSuccess {String[]} components Ingredients for the recipe
 * @apiSuccess {Number} cook_time_minutes Cook time for the recipe
 * @apiSuccess {String} img Image URL for the recipe
 * @apiSuccess {Number} __v MongoDb V Number
 * 
 * @apiSuccessExample Add Recipe Success
 * {
 *  "name": "Test Name",
 *  "instruction": [
 *      {
 *        "position": 1,
 *        "display_text": "example",
 *        "_id": "6424b72e8663a1e784609cda"
 *      }
 *    ],
 *    "description": [
 *      "example"
 *    ],
 *    "components": [
 *      "Example1",
 *      "Example2"
 *    ],
 *  "cook_time_minutes": 30,
 *  "img": "URL",
 *  "_id": "6424b72e8663a1e784609cd9",
 *  "__v": 0
 * 
 */

recipeRouter.post("/", recipeControllers.createRecipe);
recipeRouter.put("/:id", recipeControllers.updateRecipe);
recipeRouter.delete("/:id", recipeControllers.deleteRecipe);

export default recipeRouter;
