from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import Category, Article, FAQ

admin.site.register(Category)
admin.site.register(Article)
admin.site.register(FAQ)