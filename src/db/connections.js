import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/Recipes", {useNewUrlParser: true, useUnifiedTopology: true});

export default mongoose