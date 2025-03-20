from django.urls import path
from . import views


app_name = 'visitanos'
urlpatterns = [
    path('', views.visitanos, name='visitanos'),
]