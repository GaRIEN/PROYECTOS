from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.blog, name='blog'),
    path('categoria/<int:categoria_id>/', views.categoria, name='categoria'),

]