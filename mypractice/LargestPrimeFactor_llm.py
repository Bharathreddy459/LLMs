import os
import google.generativeai as genai

genai.configure(api_key = 'API_KEY')
# Create the model
# generation_config = {
#   "temperature": 1,
#   "top_p": 0.95,
#   "top_k": 40,
#   "max_output_tokens": 8192,
#   "response_mime_type": "text/plain",
# } 

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash",
  #generation_config=generation_config,
)

# chat_session = model.start_chat(
#   history=[
#   ]
# )
#response = chat_session.send_message("5 word sentence")

print("Enter the input number :")
n= int(input ())


response = model.generate_content("what is the largest prime factor of " + str(n) + "return just the number")
print(response.text)
