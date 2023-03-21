import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Groceries = new Schema({
  name: String,
  created_at: Date,
  deleted: Boolean,
  checked: Boolean,
  recipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
});

export default mongoose.model("Groceries", Groceries);
