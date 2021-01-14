import picamera
import time
import requests

cam = picamera.PiCamera()
cam.start_preview()
time.sleep(10)
cam.stop_preview()
cam.capture('./image.jpg')

with open('./image.jpg', 'rb') as img:
        files = [('send', img)]
        response = requests.post("http://pocdev.eba-gu27fjfe.ap-northeast-2.ela$
        print(response.json())