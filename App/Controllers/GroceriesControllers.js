import Groceries from "../Models/Groceries.js";
import Recipe from "../Models/IngredientsModel.js"

const groceriesController = {
    getAllGroceries: async (req, res) => {
        Groceries.find()
        .then(groceries => res.json(groceries))
    },
    getGroceries: async (req, res) => {
        const id = req.params.id;
        Groceries.findById(id)
          .populate("recipe", "name")
          .then(groceries => res.json(groceries))
      },
      //the controller below works in postman, will return a recipe from a grocery list
      //use the groceryId to get the recipe
    getRecipebyGrocery: async (req, res) => {
        const id = req.params.id;

        //finding the groceries by id
        Groceries.findById(id)
            .populate("recipe")
            .then((groceries) => {
            if (!groceries) {
                return res.status(404).json({ message: "Groceries not found" });
            }
            //finding the recipe associated with groceries based off of groceries.recipe.id
            Recipe.findById(groceries.recipe._id)
                .then((recipe) => {
                if (!recipe) {

                    //return errors if no recipe is found
                    return res.status(404).json({ message: "Recipe not found" });
                }
                res.json(recipe);
                })
        // errpr handlers
                .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server error" });
                });
            })
            .catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Server error" });
            });
        },
    createGroceries: async (req, res) => {
        const { name, recipe } = req.body;
        const newGroceries = await Groceries.create({ name, recipe })
        const populatedGroceries =await newGroceries
        .populate("recipe", "name components")
        console.log(populatedGroceries.recipe.name)
        console.log(populatedGroceries.recipe.components)
        res.json(populatedGroceries);
    },
    deleteGroceries: async (req, res) => {
        const id = req.params.id
        Groceries.findByIdAndDelete(id)
        .then(groceries => res.json(groceries))
    },
    updateGroceries: async (req, res) => {
        const id = req.params.id
        Groceries.findByIdAndUpdate(id, req.body)
        .then(groceries => {res.json(groceries
        )})
    }
};

export default groceriesController;
