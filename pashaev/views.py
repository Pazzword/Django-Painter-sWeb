from django.shortcuts import render


# Create your views here.
def pashaev(request):
    return render(request, "pashaev/pashaev_home.html", {})


def bio(request):
    return render(request, "pashaev/bio.html", {})


def gallery(request):
    return render(request, "pashaev/gallery.html", {})


def contacts(request):
    return render(request, "pashaev/contacts.html", {})
