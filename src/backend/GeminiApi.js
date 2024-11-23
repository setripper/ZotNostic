

import { GoogleGenerativeAI } from "@google/generative-ai";


async function call_gemini(input) {
    const API_KEY = 'AIzaSyC_w8xas9oJR6v8EEH5OOqvvWiysNoSY2s';

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Context: you are a doctor, and your job is to diagnose me 
    with a few possible illness i may have given the symptoms: ${input}. `


    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text()
}

export default call_gemini;
//const test = call_gemini("fever, cough, shortness of breath");