import recipes from "../Models/IngredientsModel.js";
import path from "path";

const recipeControllers = {
    getAllRecipes: async (req, res) => {
        recipes.find({}).then(recipe => {
            res.json(recipe)
        })
    },
    findRecipeById: async (req, res) => {
        const id = req.params.id
        recipes.findById(id).then(recipe => {
            res.json(recipe)
        })
    },
    findRecipeByName: async (req, res) => {
        const query = {name: new RegExp(req.params.name)}
        recipes.findOne(query).then(recipe => {
            res.json(recipe)
        })
    },
    createRecipe: async (req, res) => {
        try {
        //setting img to req.file.path according to multer documentation
        const imgUpload = req.file.path;
        //destructuring params from req.body to call on new img
        const bodyData = {
            ...req.body,
            img: imgUpload
        }
        const newRecipe = await recipes.create(bodyData)
        console.log(newRecipe)
        res.json(newRecipe)
        }catch (error) {
            console.log(error)
        }
        //maybe need to add error handling here**
    },
    updateRecipe: async (req, res) => {
        const id = req.params.id
        recipes.findByIdAndUpdate(id, req.body, {new:true})
        .then(recipe => {
            res.json(recipe)
    })
    },
    deleteRecipe: async (req, res) => {    
        const id = req.params.id
        recipes.findByIdAndDelete(id)
        .then (recipe => {
            res.json(recipe)
        })
    }
}

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
