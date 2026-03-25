const express = require('express');
const router = express.Router();
// let { GoogleGenAI } = require('@google/genai');

// let genAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

const { GoogleGenAI } = require('@google/genai')
const genAI = new GoogleGenAI( {} ); // Create the AI client

let Type = {
  OBJECT: 'object',
  STRING: 'string',
  ARRAY: 'array'
};

router.get('/', (req, res) => {
  res.render('index', { title: 'Recipe Generator' });
});

router.post('/recipe', (req, res) => {
  let userInput = req.body.ingredients;

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
    let recipe = JSON.parse(response.text);

    res.render('recipe_display', {
      title: 'Recipe Generator',
      recipeName: recipe.recipeName,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions
    });
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router