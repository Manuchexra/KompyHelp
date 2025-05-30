"""
URL configuration for kompyhelp project.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('api/users/', include('users.urls')),
    path('api/tickets/', include('tickets.urls')),
    path('api/knowledge/', include('knowledge_base.urls')),
]
