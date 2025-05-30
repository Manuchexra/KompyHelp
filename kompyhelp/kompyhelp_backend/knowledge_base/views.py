from rest_framework import viewsets, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import KnowledgeBase
from .serializers import KnowledgeBaseSerializer
from users.permissions import IsAdminOrTechnician

class KnowledgeBaseViewSet(viewsets.ModelViewSet):
    serializer_class = KnowledgeBaseSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category', 'language']
    search_fields = ['title', 'content', 'tags']

    def get_queryset(self):
        language = self.request.query_params.get('language', None)
        queryset = KnowledgeBase.objects.all()
        
        if language:
            queryset = queryset.filter(language=language)
            
        return queryset

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated, IsAdminOrTechnician]
        return [permission() for permission in permission_classes]
