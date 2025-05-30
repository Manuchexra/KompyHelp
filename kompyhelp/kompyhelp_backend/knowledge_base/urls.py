from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KnowledgeBaseViewSet

router = DefaultRouter()
router.register(r'articles', KnowledgeBaseViewSet, basename='knowledge-base')

urlpatterns = [
    path('', include(router.urls)),
]
