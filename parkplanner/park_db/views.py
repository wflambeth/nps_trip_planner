from django.shortcuts import render
from django.http import HttpResponse
import Credentials

API_KEY_NPS = Credentials.API_KEY_NPS

def index(request):
    return HttpResponse("Closed due to wildfire smoke. Check back soon!")