from django.urls import path
from . import views

app_name = "photos"
urlpatterns = [
    path("", views.ReceptPhoto.as_view()),
]