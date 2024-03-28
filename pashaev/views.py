from django.shortcuts import render


# Create your views here.
def pashaev(request):
    return render(request, "pashaev/pashaev_home.html", {})
