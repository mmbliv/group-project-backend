import recipes from "../Models/IngredientsModel.js"

const recipeControllers = {
    getAllRecipes: async (req, res, next) => {
        recipes.find({})
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))

    },
    findRecipeById: async (req, res, next) => {
        const id = req.params.id
        recipes.findById(id)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))
    },
    findRecipeByName: async (req, res, next) => {
        const name = req.params.name
        recipes.find({name})
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))
    },
    createRecipe: async (req, res, next) => {
        recipes.create(req.body)
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))
        // const newRecipe = await recipes.create(req.body)
        // res.json(newRecipe)
        // .catch(err => next(err))
    },
    updateRecipe: async (req, res, next) => {
        const id = req.params.id
        recipes.findByIdAndUpdate(id, req.body, {new:true})
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => next(err))
    },
    deleteRecipe: async (req, res, next) => {    
        const id = req.params.id
        recipes.findByIdAndDelete(id)
        .then (recipe => {
            res.json(recipe)
        })
        .catch (err => next(err))
    }
}

export default recipeControllers

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