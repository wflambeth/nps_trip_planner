from django.shortcuts import render
from django import http
import json
import Credentials
from park_db.models import Park
import sys

# for future dynamic update calls 
# (or we can just implement this as middleware)
API_KEY_NPS = Credentials.API_KEY_NPS
PARKS_ENDPOINT = "https://developer.nps.gov/api/v1/parks?"

# request must be formatted: /park_db/(park_code)/fullname

def fullname(request, park_code):
    if request.method != 'GET':
        return render(request, http.HttpResponseNotAllowed(['GET']))

    try:
        print("processing request")
        park = Park.objects.get(park_code=park_code)
        if not park:
            return http.HttpResponseNotFound("Park " + park_code + " not found.")

        print("attempting json")
        return http.JsonResponse ({
                "park_code": park.park_code,
                "park_fullname": park.park_fullname
            })  
    except:
        e = sys.exc_info()[0]
        # This is a bad idea and only in here to DEBUG
        print(e)
        return http.HttpResponseServerError("Sorry! There was an error.")
