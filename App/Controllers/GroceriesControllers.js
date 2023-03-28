import Groceries from "../Models/Groceries.js";

const groceriesController = {
  getAllGroceries: async (req, res) => {
    Groceries.find({}).then((groceries) => res.json(groceries));
  },
  getGroceries: async (req, res) => {
    const id = req.params.id;
    Groceries.findById(id).then((groceries) => res.json(groceries));
  },
  createGroceries: async (req, res) => {
    const data = await Groceries.create(req.body);
    res.json(data);
    // const newGroceries = new Groceries(req.body);
    // res.json(newGroceries);
  },
  deleteGroceries: async (req, res) => {
    const id = req.params.id.then((groceries) => res.json(groceries));
  },
  updateGroceries: async (req, res) => {
    const id = req.params.id;
    Groceries.findByIdAndUpdate(id, req.body).then((groceries) => {
      res.json(groceries);
    });
  },
  updateCheck: async (req, res) => {
    const id = req.params.id;
    const data = await Groceries.findById(id);
    const updatedData = await Groceries.findByIdAndUpdate(id, {
      checked: !data.checked,
    });
    res.json(updatedData);
  },
};

export default groceriesController;
