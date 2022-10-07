from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Closed due to wildfire smoke. Check back soon!")
