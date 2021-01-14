import requests
import json

with open('./sample.jpeg', 'rb') as img:
    files = [
        ('send', img)
    ]
    # http://pocdev.eba-gu27fjfe.ap-northeast-2.elasticbeanstalk.com
    response = requests.post("http://pocdev.eba-gu27fjfe.ap-northeast-2.elasticbeanstalk.com/photos/send", files=files)
    print(response.json())
