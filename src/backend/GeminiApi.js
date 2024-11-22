

import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = 'API_KEY = AIzaSyC_w8xas9oJR6v8EEH5OOqvvWiysNoSY2s'


async function call_gemini(input) {

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Context: you are a doctor, and your job is to diagnose me 
    with a few possible illness i may have given the symptoms: ${input}. When sending 
    your response back, only return a list of possible illness, no questions and no other 
    filler text`


    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text()
}

export default call_gemini;
//const test = call_gemini("fever, cough, shortness of breath");