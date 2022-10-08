from django import http
import sys, urllib, json
from datetime import datetime

import park_db.Credentials
from park_db.models import Park

# for future dynamic update calls 
# (or we can just implement this as middleware)
NPS_ENDPOINT = "https://developer.nps.gov/api/v1"
API_KEY_NPS = park_db.Credentials.API_KEY_NPS
HEADERS = {"Authorization": API_KEY_NPS}

# GET /park_db/(park_code)/fullname
# Retrieves fullname data from local SQLite DB
def fullname(request, park_code):
    if request.method != 'GET':
        return http.HttpResponseNotAllowed(['GET'])

    try:
        park = Park.objects.get(park_code=park_code)
        if not park:
            return http.HttpResponseNotFound("Park " + park_code + " not found.")

        return http.JsonResponse ({
                "park_code": park.park_code,
                "park_fullname": park.park_fullname
            })  
    except:
        e = sys.exc_info()[0]
        #DEBUG
        print(repr(e))
        return http.HttpResponseServerError("Sorry! There was an error.")

# GET /park_db/(park_code)/events/<yyyy-mm-dd>
# Retrieves event data directly from NPS API endpoint
def events(request, park_code, date):
    # validate date querystring
    if date != datetime.fromisoformat(date).strftime('%Y-%m-%d'): 
        return http.HttpResponseBadRequest('Invalid date format; please use YYYY-MM-DD')

    endpoint = NPS_ENDPOINT + "/events?parkcode=" + park_code + "&dateStart=" + date + "&api_key=" + API_KEY_NPS + "&expandRecurring=True"
    try: 
        req = urllib.request.Request(endpoint, headers=HEADERS)
        with urllib.request.urlopen(req) as response:
            eventdata = json.load(response)
            print(eventdata)
            return http.JsonResponse(eventdata)

    except:
        e = sys.exc_info()[0]
        print(e)
        return http.HttpResponseServerError("Error retrieving events! Please try again.")

def alerts(request, park_code):
    endpoint = NPS_ENDPOINT + "/alerts?parkcode=" + park_code + "&api_key=" + API_KEY_NPS
    try:
        req = urllib.request.Request(endpoint, headers=HEADERS)
        with urllib.request.urlopen(req) as response:
            alertdata = json.load(response)
            print(alertdata)
            return http.JsonResponse(alertdata)

    except:
        e = sys.exec_info()[0]
        print(e)
        return http.HttpResponseServerError("Error retrieving alerts! Please try again")
