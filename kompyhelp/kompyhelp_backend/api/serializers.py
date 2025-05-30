from rest_framework import serializers
from .models import (
    RepairRequest, 
    Location, 
    InventoryItem, 
    InventoryPart, 
    Appointment, 
    Feedback
)
from users.models import User

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'address', 'city', 'latitude', 'longitude']

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = ['id', 'name', 'description', 'quantity', 'price', 'category']

class InventoryPartSerializer(serializers.ModelSerializer):
    item = InventoryItemSerializer(read_only=True)
    item_id = serializers.PrimaryKeyRelatedField(
        queryset=InventoryItem.objects.all(),
        source='item',
        write_only=True
    )

    class Meta:
        model = InventoryPart
        fields = ['id', 'item', 'item_id', 'quantity']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'role']

class RepairRequestSerializer(serializers.ModelSerializer):
    location = LocationSerializer(required=False)
    parts = InventoryPartSerializer(source='inventorypart_set', many=True, required=False)
    user = UserSerializer(read_only=True)
    technician = UserSerializer(read_only=True)

    class Meta:
        model = RepairRequest
        fields = [
            'id', 'title', 'description', 'status', 'priority', 
            'estimated_cost', 'user', 'technician', 'location', 
            'parts', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

    def create(self, validated_data):
        location_data = validated_data.pop('location', None)
        parts_data = validated_data.pop('inventorypart_set', [])
        
        request = RepairRequest.objects.create(**validated_data)
        
        if location_data:
            Location.objects.create(request=request, **location_data)
        
        for part_data in parts_data:
            InventoryPart.objects.create(request=request, **part_data)
        
        return request

    def update(self, instance, validated_data):
        location_data = validated_data.pop('location', None)
        parts_data = validated_data.pop('inventorypart_set', [])
        
        # Update the request instance
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        
        # Update or create location
        if location_data:
            if hasattr(instance, 'location') and instance.location:
                for attr, value in location_data.items():
                    setattr(instance.location, attr, value)
                instance.location.save()
            else:
                Location.objects.create(request=instance, **location_data)
        
        # Update parts
        if parts_data:
            instance.inventorypart_set.all().delete()
            for part_data in parts_data:
                InventoryPart.objects.create(request=instance, **part_data)
        
        return instance

class AppointmentSerializer(serializers.ModelSerializer):
    request = RepairRequestSerializer(read_only=True)
    request_id = serializers.PrimaryKeyRelatedField(
        queryset=RepairRequest.objects.all(),
        source='request',
        write_only=True
    )
    user = UserSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = [
            'id', 'date', 'duration', 'status', 'notes', 
            'request', 'request_id', 'user', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class FeedbackSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    request = RepairRequestSerializer(read_only=True)
    request_id = serializers.PrimaryKeyRelatedField(
        queryset=RepairRequest.objects.all(),
        source='request',
        write_only=True
    )

    class Meta:
        model = Feedback
        fields = [
            'id', 'rating', 'comment', 'user', 
            'request', 'request_id', 'created_at'
        ]
        read_only_fields = ['created_at']
