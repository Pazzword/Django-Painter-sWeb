from django.urls import path
from . import views

urlpatterns = [
    path("", views.pashaev, name="pashaev_home"),
    path("bio/", views.bio, name="bio"),
    path("gallery/", views.gallery, name="gallery"),
    path("contacts/", views.contacts, name="contacts"),
]
