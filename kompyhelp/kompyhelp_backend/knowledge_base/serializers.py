from rest_framework import serializers
from .models import KnowledgeBase

class KnowledgeBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeBase
        fields = [
            'id', 'title', 'content', 'category', 
            'tags', 'language', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']
