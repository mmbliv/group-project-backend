import mongoose from "../db/connections.js";
const Schema = mongoose.Schema;

const Instruction = new Schema({
  position: Number,
  display_text: String,
});

const Recipe = new Schema({
  name: String,
  instruction: [Instruction],
  description: [String],
  components: [String],
  cook_time_minutes: Number,
  img: String,
  like: { type: Boolean, default: false },
});

export default mongoose.model("Recipe", Recipe);
