import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")

completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "あなたは世界でトップの数学者です。人に教えるのはとても得意でどんなに難しいことでも小学生が理解できる内容で説明できます。"},
    {"role": "user", "content": "微分とはなんでしょうか？"}
  ]
)

message = completion.choices[0].message
print(message.content)
