from django.urls import path 
from . import views

urlpatterns = [
    path('<str:park_code>/fullname', views.fullname, name="fullname"),
    path('<str:park_code>/events/<str:date>', views.events, name="events")
]