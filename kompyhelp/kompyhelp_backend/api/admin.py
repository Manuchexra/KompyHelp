from django.contrib import admin
from .models import (
    RepairRequest, 
    Location, 
    InventoryItem, 
    InventoryPart, 
    Appointment, 
    Feedback
)

class InventoryPartInline(admin.TabularInline):
    model = InventoryPart
    extra = 1

@admin.register(RepairRequest)
class RepairRequestAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'technician', 'status', 'priority', 'created_at')
    list_filter = ('status', 'priority', 'created_at')
    search_fields = ('title', 'description', 'user__email', 'technician__email')
    inlines = [InventoryPartInline]
    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'user', 'technician')
        }),
        ('Status Information', {
            'fields': ('status', 'priority', 'estimated_cost')
        }),
        ('Location', {
            'fields': ('location',)
        }),
    )

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('address', 'city', 'latitude', 'longitude')
    search_fields = ('address', 'city')

@admin.register(InventoryItem)
class InventoryItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'quantity', 'price')
    list_filter = ('category',)
    search_fields = ('name', 'description', 'category')

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('request', 'date', 'duration', 'status', 'user')
    list_filter = ('status', 'date')
    search_fields = ('request__title', 'user__email', 'notes')

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('user', 'request', 'rating', 'created_at')
    list_filter = ('rating', 'created_at')
    search_fields = ('user__email', 'request__title', 'comment')
