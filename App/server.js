import express from "express";
import cors from "cors";
import errorHandler from "./Helpers/errorHandler.js";
import recipeRouter from "./Routes/RecipeRouter.js";
import groceriesRouter from "./Routes/GroceriesRouter.js";
import multer from "multer";

const app = express();

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.use(multer().any());

app.use(express.json());

app.use("/recipes", recipeRouter);

app.use("/groceries", groceriesRouter);

app.use(errorHandler);

app.listen(4000, () => {
  console.log("listening");
});
