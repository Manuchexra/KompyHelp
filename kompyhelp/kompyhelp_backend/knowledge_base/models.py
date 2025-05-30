from django.db import models
from django.utils.translation import gettext_lazy as _

class KnowledgeBase(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.CharField(max_length=100)
    tags = models.JSONField(default=list)
    language = models.CharField(max_length=2, choices=[
        ('en', _('English')),
        ('uz', _('Uzbek')),
        ('ru', _('Russian')),
    ])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _('Knowledge Base Article')
        verbose_name_plural = _('Knowledge Base Articles')

    def __str__(self):
        return f"{self.title} ({self.get_language_display()})"
