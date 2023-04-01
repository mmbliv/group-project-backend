import express from "express";
import cors from "cors";
import errorHandler from "./Helpers/errorHandler.js";
import recipeRouter from "./Routes/RecipeRouter.js";
import groceriesRouter from "./Routes/GroceriesRouter.js";
import * as dotenv from "dotenv";
import connectDB from "./db/connections.js";
dotenv.config();
const app = express();
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.use(express.json());

app.use("/recipes", recipeRouter);

app.use("/groceries", groceriesRouter);

app.use(errorHandler);
const PORT = 4000 || process.env.PORT;
const Start = async () => {
  try {
    await connectDB(process.env.MONGODB);
    app.listen(PORT, () => {
      console.log("listening");
    });
  } catch (error) {
    console.log(error);
  }
};
Start();
