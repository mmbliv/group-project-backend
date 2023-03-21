import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Instruction = new Schema({
  position: Number,
  display_text: String,
});
// const Tag = new Schema({
//   type: { type: String, enum: ["Easy", "Medium", "Difficulty"] },
// });
const Recipe = new Schema({
  name: String,
  instructions: [Instruction],
  decription: String,
  components: [String],
  cook_time_minutes: Number,
});

export default mongoose.model("Recipe", Recipe);
