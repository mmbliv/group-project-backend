import Groceries from "../Models/Groceries.js";
import Recipe from "../Models/IngredientsModel.js";

const groceriesController = {
    getAllGroceries: async (req, res) => {
        Groceries.find({})
        .then(groceries => res.json(groceries))
    },
    getGroceries: async (req, res) => {
        const id = req.params.id;
        const groceries = await Groceries.find(id).populate('Recipe')
        .then(groceries => res.json(groceries))
    },
    getRecipebyGroceries: async (req, res) => {
    const groceries = await Groceries.find().populate('Recipe');
    const recipe = groceries.map((grocery) => grocery.Recipe);
    res.json(recipe)
    },
    createGroceries: async (req, res) => {
        const newGroceries = new Groceries(req.body);
        res.json(newGroceries);
    },
    deleteGroceries: async (req, res) => {
        const id = req.params.id
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
