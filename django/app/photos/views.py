from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Photo
from .serializers import PhotoSerializer
from PIL import Image
import os


class ReceptPhoto(APIView):

    def post(self, request):
        pass
