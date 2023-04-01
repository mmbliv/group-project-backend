// import mongoose from "mongoose";
// console.log(process.env);
// mongoose.connect(
//   `mongodb+srv://mmbliv:${process.env.MONGODB_PASSWORD}@cluster0.3id8zfg.mongodb.net/?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// export default mongoose;

import mongoose from "mongoose";
const connectDB = (url) => {
  //   console.log(url);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default connectDB;
