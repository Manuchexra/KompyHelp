from django.contrib import admin
from .models import KnowledgeBase

@admin.register(KnowledgeBase)
class KnowledgeBaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'language', 'created_at')
    list_filter = ('category', 'language', 'created_at')
    search_fields = ('title', 'content', 'category', 'tags')
    fieldsets = (
        (None, {
            'fields': ('title', 'content', 'category')
        }),
        ('Metadata', {
            'fields': ('tags', 'language')
        }),
    )
