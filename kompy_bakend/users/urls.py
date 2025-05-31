from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    path('profile/', views.get_profile, name='get_profile'),
    path('profile/update/', views.update_profile, name='update_profile'),
]
