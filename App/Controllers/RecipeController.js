import recipes from "../Models/IngredientsModel.js"

const findAllRecipes = async () => {
    return await recipes.find()
}

const findRecipeById = async (id) => {
    return await recipes.findById(id)
}

const findRecipeByName = async (name) => {
    return await recipes.findOne({ name })
}

const updateRecipe = async (id) => {
    return await recipes.findOneAndUpdate(id)
}

const createRecipe = async () => {
    return await recipes.create()
}

const deleteRecipe = async (id) => {
    return await recipes.findByIdAndDelete(id)
}

export default { findAllRecipes, findRecipeById, findRecipeByName, updateRecipe, createRecipe, deleteRecipe }