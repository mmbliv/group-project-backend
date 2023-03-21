import recipes from "../Models/IngredientsModel.js"

const findRecipe = async () => {
    return await recipes.find()
}

const findRecipeById = async (id) => {
    return await recipes.findById(id)
}

const findRecipebyName = async (name) => {
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

export default { findRecipe, findRecipeById, findRecipebyName, updateRecipe, createRecipe, deleteRecipe }