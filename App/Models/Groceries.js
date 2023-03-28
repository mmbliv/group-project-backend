import { timeStamp } from "console";
import mongoose from "../db/connections.js";
const Schema = mongoose.Schema;

const Groceries = new Schema(
  {
    name: String,
    //   created_at: Date,
    deleted: Boolean,
    checked: Boolean,
    recipe: { type: Schema.Types.String, ref: "Recipe" },
  },
  { timestamps: true }
);

export default mongoose.model("Groceries", Groceries);
