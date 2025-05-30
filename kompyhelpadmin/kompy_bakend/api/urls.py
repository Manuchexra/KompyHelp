from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('stats/', views.get_stats, name='get_stats'),
]
