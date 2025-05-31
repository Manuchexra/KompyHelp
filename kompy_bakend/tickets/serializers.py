from rest_framework import serializers
from .models import Ticket, TicketComment
from users.serializers import UserSerializer


class TicketCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = TicketComment
        fields = ['id', 'user', 'comment', 'created_at', 'is_internal']
        read_only_fields = ['id', 'created_at']


class TicketSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    assigned_to = UserSerializer(read_only=True)
    comments = TicketCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Ticket
        fields = ['id', 'title', 'description', 'user', 'assigned_to', 'priority', 
                 'status', 'category', 'created_at', 'updated_at', 'resolved_at', 'comments']
        read_only_fields = ['id', 'created_at', 'updated_at']


class TicketCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['title', 'description', 'priority', 'category']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
