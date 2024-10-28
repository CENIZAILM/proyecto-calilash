from django.shortcuts import render
from .models import ProductoLash, ProductoNails

def index(request):
    return render(request, 'index.html')

def contacto(request):
    return render(request, 'contacto.html')

def nails(request):
    productos_nails = ProductoNails.objects.all()
    return render(request, 'nails.html', {'productos_nails': productos_nails})

def lash(request):
    productos_lash = ProductoLash.objects.all()
    return render(request, 'lash.html', {'productos_lash': productos_lash})

