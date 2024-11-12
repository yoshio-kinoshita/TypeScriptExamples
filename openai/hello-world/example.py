import os
import openai
openai.organization = "org-Mwg9uMck9GYj04JOk2g4QJiB"

apikey = os.getenv("OPENAI_API_KEY")
openai.api_key= apikey 
print (openai.Model.list())
os.getenv("OPENAI_API_KEY")