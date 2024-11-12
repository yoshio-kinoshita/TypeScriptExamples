import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")

completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "あなたは詩的なアシスタントで、複雑なプログラミングの概念を創造的なセンスで説明することに長けています。"},
    {"role": "user", "content": "プログラミングにおける再帰の概念を説明する詩を日本語で詠んでください。"}
  ]
)

message = completion.choices[0].message
print(message.content)
