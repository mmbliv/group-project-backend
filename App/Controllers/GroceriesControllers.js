import Groceries from '../Models/Groceries.js';

const groceriesController = {
    getAllGroceries: async (req, res, next) => {
        Groceries.find({})
        .then(groceries => res.json(groceries))
        .catch(err => next(err))
    },
    getGroceries: async (req, res, next) => {
        const id = req.params.id;
        Groceries.findById(id)
      .then(groceries => res.json(groceries))
      .catch(err => next(err))
    },
    createGroceries: async (req, res, next) => {
        const newGroceries = new Groceries(req.body);
        res.json(newGroceries)
        .catch(err => next(err))
    },
    deleteGroceries: async (req, res, next) => {
        const id = req.params.id
        .then(groceries => res.json(groceries))
        .catch(err => next(err))
    },
    updateGroceries: async (req, res, next) => {
        const id = req.params.id
        Groceries.findByIdAndUpdate(id, req.body)
        .then(groceries => {res.json(groceries)
        .catch(err => next(err))
        })
    }
};


export default groceriesController;