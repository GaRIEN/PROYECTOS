from django.urls import path
from . import views

app_name = 'historia'
urlpatterns = [
    path('', views.historia, name='historia'),
]