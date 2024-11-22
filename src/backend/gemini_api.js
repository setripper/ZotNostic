import dotenv from 'dotenv/config';


import { GoogleGenerativeAI } from "@google/generative-ai";

async function call_gemini(input) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Context: you are a doctor, and your job is to diagnose me 
    with a few possible illness i may have given the symptoms: ${input}. When sending 
    your response back, only return a list of possible illness, no questions and no other 
    filler text`


    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    return result.response.text()
}


//const test = call_gemini("fever, cough, shortness of breath");