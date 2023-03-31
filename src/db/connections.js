import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://mmbliv:1040hemin@cluster0.3id8zfg.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

export default mongoose;
