import google.generativeai as genai
import os
from dotenv import load_dotenv


def call_gemini(input: str) -> str:
    """
    for now this is just a function just to get see how gemini runs
    if we need to we make make the api return like a json if we need
    it too
    """

    load_dotenv()
    genai.configure(api_key = os.getenv("API_KEY"))
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"""Context: you are a doctor, and your job is to diagnose me 
    with a few possible illness i may have given the symptoms: {input}. When sending 
    your response back, only return a list of possible illness, no questions and no other 
    filler text
    """

    
    response = model.generate_content(prompt)
    #response includes other information outside of its text if we need it
    return response.text


"""

print("[OUTPUT OF GEMINI]")
print(call_gemini("headache, fever, runny rose, sore throat"), end="")
print("[END OUTPUT]")

"""

