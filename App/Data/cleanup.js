import axios from "axios";

const API_URL = "https://tasty.p.rapidapi.com/recipes/list";

//Below is code copied from rapidapi, it prints 1 result at a time and we can change the size in Options.params.

const Options = {
  method: "GET",
  url: API_URL,
  params: { from: "0", size: "1" },
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
    response.data.results.forEach((d) => {
      const data = {};
      const instructionArray = [];
      data.name = d.name;
      data.description = d.description;
      data.cook_time_minutes = d.cook_time_minutes;
      d.instructions.forEach((d) => {
        const instructionObj = {};
        instructionObj.position = d.position;
        instructionObj.display_text = d.display_text;
        instructionArray.push(instructionObj);
      });
      data.instructions = instructionArray;
      result.push(data);
    });
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
