from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Q
from .models import Category, Article, FAQ
from .serializers import CategorySerializer, ArticleSerializer, FAQSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def list_categories(request):
    """List all categories"""
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def list_articles(request):
    """List all published articles"""
    articles = Article.objects.filter(is_published=True)
    category_id = request.GET.get('category')
    if category_id:
        articles = articles.filter(category_id=category_id)
    
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_article(request, article_id):
    """Get a specific article and increment views"""
    article = get_object_or_404(Article, id=article_id, is_published=True)
    article.views += 1
    article.save()
    
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def list_faqs(request):
    """List all published FAQs"""
    faqs = FAQ.objects.filter(is_published=True)
    category_id = request.GET.get('category')
    if category_id:
        faqs = faqs.filter(category_id=category_id)
    
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def search_knowledge(request):
    """Search articles and FAQs"""
    query = request.GET.get('q', '')
    if not query:
        return Response({'articles': [], 'faqs': []})
    
    articles = Article.objects.filter(
        Q(title__icontains=query) | Q(content__icontains=query),
        is_published=True
    )
    
    faqs = FAQ.objects.filter(
        Q(question__icontains=query) | Q(answer__icontains=query),
        is_published=True
    )
    
    return Response({
        'articles': ArticleSerializer(articles, many=True).data,
        'faqs': FAQSerializer(faqs, many=True).data
    })
