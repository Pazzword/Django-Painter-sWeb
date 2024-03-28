from django.urls import path
from . import views

urlpatterns = [
    path("", views.pashaev, name="pashaev_home"),
]
