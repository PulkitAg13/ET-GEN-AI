import os
import requests
from dotenv import load_dotenv

# Load env variables
load_dotenv()

API_KEY = os.getenv("GROQ_API_KEY")

def ask_llama(prompt):
    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "llama3-8b-8192",
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            }
        )

        return response.json()["choices"][0]["message"]["content"]

    except Exception as e:
        return f"Error: {str(e)}"