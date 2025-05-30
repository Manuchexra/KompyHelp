from rest_framework import serializers
from .models import Category, Article, FAQ
from users.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'created_at']


class ArticleSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'category', 'author', 'is_published', 
                 'views', 'created_at', 'updated_at']


class FAQSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category', 'is_published', 'order', 'created_at']
