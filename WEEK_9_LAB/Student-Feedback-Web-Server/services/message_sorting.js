let { GoogleGenAI, Type } = require("@google/genai") // Import Gemini client and schema types

let departments = require("./departments.json"); // Load departmant choices from JSON
const { response, json } = require("express");

const genAI = new GoogleGenAI( {} ); // Create the AI client


function selectDepartments(message) {

    let departmentString = JSON.stringify(departments) // Convert departments to a string

    let prompt = `Return a list of the most likely departments to handle the following message.
    Only include departments which seem to be a good fit for the message.
    If there does not seem to be a good fit, return an empty list. 
    message: ${message}
    department choices: ${departmentString}` // Build the promt for the model

    return genAI.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json', // Ask for JSON output
            responseSchema: {
                type: Type.ARRAY, // Expect an array result
                items: {
                    type: Type.STRING // Each item should be a string
                }
            }
        }
    }).then(response=> {
        console.log(response.text)
        let departmentList = JSON.parse(response.text)
        console.log(departmentList)
        return departmentList
    })
}

module.exports = selectDepartments // Export the function