from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from tickets.models import Ticket
from knowledge_base.models import Article


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """Health check endpoint"""
    return Response({
        'status': 'healthy',
        'message': 'KompyHelp API is running'
    })


@api_view(['GET'])
def get_stats(request):
    """Get application statistics"""
    stats = {
        'total_users': User.objects.count(),
        'total_tickets': Ticket.objects.count(),
        'total_articles': Article.objects.count(),
        'open_tickets': Ticket.objects.filter(status='open').count(),
        'closed_tickets': Ticket.objects.filter(status='closed').count(),
    }
    return Response(stats)
