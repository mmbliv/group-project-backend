import Groceries from "../Models/Groceries.js";
import Recipe from "../Models/IngredientsModel.js"

const groceriesController = {
    getAllGroceries: async (req, res) => {
        Groceries.find({})
        .populate('recipe', 'components')
        .then(groceries => res.json(groceries))
    },
    getGroceries: async (req, res) => {
        const id = req.params.id;
        Groceries.findById(id)
          .populate("recipe", "name")
          .then(groceries => res.json(groceries))
      },
    createGroceries: async (req, res) => {
        const { name, recipe } = req.body;
        const newGroceries = await Groceries.create({ name, recipe })
        const populatedGroceries =await newGroceries
        .populate("recipe", "components")
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
