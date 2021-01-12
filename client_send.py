import requests

with open('./sample.jpeg', 'rb') as img:
    files = [
        ('send', img)
    ]
    try:
        requests.post("http://0.0.0.0:8000/photos/send", files=files)
        print("이미지 전송 성공")
    except:
        print("이미지 전송 실패")
