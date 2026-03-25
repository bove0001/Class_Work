

let { GoogleGenAI } = require('@google/genai');

let genAI = new GoogleGenAI({
  apiKey: 'AIzaSyDh2Jy-pRkHIIEYR55H9p8TT_ylAxSAW8I'
})

// let genAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

let Type = {
  OBJECT: 'object',
  STRING: 'string',
  ARRAY: 'array'
};

let userInput = 'eggs and broccoli and leftover peking duck and rice';

let prompt = `Write a recipe that uses the following ingredients: ${userInput}`;

genAI.models.generateContent({
  model: 'gemini-2.5-flash',
  contents: prompt,
  config: {
    systemInstruction: `You are a recipe suggestion bot for a health-conscious, budget-friendly website. Suggest recipes that are easy to make, use the provided ingredients, and are suitable for a family of four. Include a list of ingredients and step-by-step instructions. Avoid using any additional ingredients that are not listed in the user input.`,
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        recipeName: {
          type: Type.STRING,
          description: 'The name of the recipe'
        },
        ingredients: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        },
        instructions: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      },
      required: ['recipeName', 'ingredients', 'instructions']
    }
  }
}).then((response) => {
  console.log(response.text);

  let recipe = JSON.parse(response.text);

  console.log(`Recipe: ${recipe.recipeName}`);
  console.log('Ingredients:');
  recipe.ingredients.forEach((ingredient) => {
    console.log(`- ${ingredient}`);
  });

  console.log('Instructions:');
  recipe.instructions.forEach((instruction) => {
    console.log(`- ${instruction}`);
  });
}).catch((error) => {
  console.error(error);
});