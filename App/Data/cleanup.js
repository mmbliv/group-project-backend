import axios from "axios";
import recipes from "../Models/IngredientsModel.js";

const API_URL = "https://tasty.p.rapidapi.com/recipes/list";

//Below is code copied from rapidapi, it prints 1 result at a time and we can change the size in Options.params.

const Options = {
  method: "GET",
  url: API_URL,
  params: { from: "0", size: "6" },
  headers: {
    "x-rapidapi-host": "tasty.p.rapidapi.com",
    "x-rapidapi-key": "88a962e218msh4aefd9f72da1e14p1d0786jsn10daadfe2f1c",
  },
};

axios
  .request(Options)
  .then(function (response) {
    // console.log(response.data.results);
    const result = [];
    if (response.data.results === null) {
      throw new Error("No recipes found");
    } else {
      response.data.results.forEach((d) => {
        //   const data = {};
        //   data.name = d.name;
        //   data.description = d.description;
        //   console.log(d.instructions);
        //   d.recipes.forEach((d) => {
        //     instructionObj.position = d.position;
        //     instructionObj.display_text = d.display_text;
        //     instructionArray.push(instructionObj);
        //   });
        //   data.instructions = instructionArray;
        //   result.push(data);
        if (d.recipes) {
          d.recipes.forEach((d) => {
            const data = {};
            const components = [];
            const instructionArray = [];
            data.name = d.name;
            data.description = d.description;
            data.img = d.thumbnail_url;
            data.cook_time_minutes = d.cook_time_minutes;
            d.instructions.forEach((d) => {
              const instructionObj = {};
              instructionObj.position = d.position;
              instructionObj.display_text = d.display_text;
              instructionArray.push(instructionObj);
            });
            d.sections.forEach((d) => {
              d.components.forEach((d) => {
                components.push(d.ingredient.name);
              });
            });
            data.instruction = instructionArray;
            data.components = components;
            result.push(data);
          });
        }
        if (d.sections) {
          const data = {};
          const components = [];
          const instructionArray = [];
          data.name = d.name;
          data.img = d.thumbnail_url;
          data.cook_time_minutes = d.cook_time_minutes;
          data.description = d.description;
          d.sections.forEach((d) => {
            d.components.forEach((d) => components.push(d.ingredient.name));
          });
          d.instructions.forEach((d) => {
            const instructionObj = {};
            instructionObj.position = d.position;
            instructionObj.display_text = d.display_text;
            instructionArray.push(instructionObj);
          });
        }
      });
      // console.log(result);
      console.log(result[0].instruction[0]);
      console.log(result[0].instruction[1]);
      return recipes.create(result);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
