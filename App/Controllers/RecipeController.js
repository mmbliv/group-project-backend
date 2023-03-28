import recipes from "../Models/IngredientsModel.js";
import multer from "multer";
const upload = multer({
  dest: "uploads/",
});
const recipeControllers = {
  getAllRecipes: async (req, res) => {
    recipes.find({}).then((recipe) => {
      res.json(recipe);
    });
  },
  findRecipeById: async (req, res) => {
    const id = req.params.id;
    recipes.findById(id).then((recipe) => {
      res.json(recipe);
    });
  },
  findRecipeByName: async (req, res) => {
    const nameParam = req.params.name;
    //sets name to lowercase when searching for recipe
    const name = new RegExp(nameParam, "i");
    recipes.find({ name: name }).then((recipe) => {
      res.json(recipe);
    });
  },
  redirectToRecipe: async (req, res) => {
    const nameParam = req.params.name;
    const name = new RegExp(nameParam, "i");
    recipes.findOne({ name: name }).then((recipe) => {
      res.json(recipe);
    });
  },
  createRecipe: async (req, res) => {
    console.log(req.file);
    const newRecipe = await recipes.create(req.body);
    res.json(newRecipe);
  },
  updateRecipe: async (req, res) => {
    const id = req.params.id;
    recipes.findByIdAndUpdate(id, req.body, { new: true }).then((recipe) => {
      res.json(recipe);
    });
  },
  deleteRecipe: async (req, res) => {
    const id = req.params.id;
    recipes.findByIdAndDelete(id).then((recipe) => {
      res.json(recipe);
    });
  },
};

export default recipeControllers;

// const findAllRecipes = async () => {
//     return await recipes.find()
// }

// const findRecipeById = async (id) => {
//     return await recipes.findById(id)
// }

// const findRecipeByName = async (name) => {
//     return await recipes.find({name})
// }

// const updateRecipe = async (id, updatedRecipe) => {

//     return await recipes.findByIdAndUpdate(id, updatedRecipe, {new: true})
// }

// // const createRecipe = async (req, res) => {
// //     const newRecipe = await recipes.create(req.body)
// //     return newRecipe
// // }

// const deleteRecipe = async (id) => {
//     return await recipes.findByIdAndDelete(id)
// }

// export default { findAllRecipes, findRecipeById, findRecipeByName, updateRecipe, createRecipe, deleteRecipe }