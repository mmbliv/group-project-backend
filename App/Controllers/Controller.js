import recipes from "../Models/IngredientsModel.js"

const findRecipe = async () => {
    return await recipes.find()
}

const updateRecipe = async (id) => {
    return await recipes.findOneAndUpdate(id)
}

const createRecipe = async () => {
    return await recipes.create()
}


