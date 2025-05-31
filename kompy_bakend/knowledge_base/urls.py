from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.list_categories, name='list_categories'),
    path('articles/', views.list_articles, name='list_articles'),
    path('articles/<int:article_id>/', views.get_article, name='get_article'),
    path('faqs/', views.list_faqs, name='list_faqs'),
    path('search/', views.search_knowledge, name='search_knowledge'),
]
