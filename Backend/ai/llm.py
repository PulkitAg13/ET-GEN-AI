import os
import requests
from dotenv import load_dotenv

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
                "model": "llama-3.1-8b-instant",
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            }
        )

        data = response.json()

        # 🔍 DEBUG PRINT (VERY IMPORTANT)
        print("LLM RAW RESPONSE:", data)

        # ✅ Safe parsing
        if "choices" in data:
            return data["choices"][0]["message"]["content"]

        elif "error" in data:
            return f"LLM Error: {data['error']['message']}"

        else:
            return f"Unexpected response: {data}"

    except Exception as e:
        return f"Exception: {str(e)}"