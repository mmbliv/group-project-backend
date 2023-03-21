import recipes from "../Models/IngredientsModel.js"

const findRecipe = async () => {
    return await recipes.find()
}


