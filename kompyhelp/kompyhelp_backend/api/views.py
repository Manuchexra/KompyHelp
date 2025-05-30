from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import (
    RepairRequest, 
    Location, 
    InventoryItem, 
    Appointment, 
    Feedback
)
from .serializers import (
    RepairRequestSerializer,
    LocationSerializer,
    InventoryItemSerializer,
    AppointmentSerializer,
    FeedbackSerializer
)
from users.permissions import IsAdminOrTechnician, IsOwner
from rest_framework.views import APIView
from rest_framework import status

class HealthCheckView(APIView):
    """
    A simple view to check if the API is running
    """
    permission_classes = []  # No authentication required
    
    def get(self, request):
        return Response(
            {"status": "ok", "message": "API is running"}, 
            status=status.HTTP_200_OK
        )

class RepairRequestViewSet(viewsets.ModelViewSet):
    serializer_class = RepairRequestSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['status', 'priority']
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'updated_at', 'priority']
    ordering = ['-created_at']

    def get_queryset(self):
        user = self.request.user
        if user.role in ['ADMIN', 'TECHNICIAN']:
            return RepairRequest.objects.all()
        return RepairRequest.objects.filter(user=user)

    def get_permissions(self):
        if self.action in ['create', 'list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ['update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAuthenticated, IsOwner | IsAdminOrTechnician]
        else:
            permission_classes = [permissions.IsAuthenticated, IsAdminOrTechnician]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'])
    def assign_technician(self, request, pk=None):
        repair_request = self.get_object()
        technician_id = request.data.get('technician_id')
        
        if not technician_id:
            return Response({'error': 'Technician ID is required'}, status=400)
        
        from users.models import User
        try:
            technician = User.objects.get(id=technician_id, role='TECHNICIAN')
        except User.DoesNotExist:
            return Response({'error': 'Technician not found'}, status=404)
        
        repair_request.technician = technician
        repair_request.save()
        
        serializer = self.get_serializer(repair_request)
        return Response(serializer.data)

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.IsAuthenticated]

class InventoryItemViewSet(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.IsAuthenticated, IsAdminOrTechnician]
        return [permission() for permission in permission_classes]

class AppointmentViewSet(viewsets.ModelViewSet):
    serializer_class = AppointmentSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['status', 'date']
    ordering_fields = ['date', 'created_at']
    ordering = ['date']

    def get_queryset(self):
        user = self.request.user
        if user.role in ['ADMIN', 'TECHNICIAN']:
            return Appointment.objects.all()
        return Appointment.objects.filter(user=user)

    def get_permissions(self):
        if self.action in ['create', 'list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ['update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAuthenticated, IsOwner | IsAdminOrTechnician]
        else:
            permission_classes = [permissions.IsAuthenticated, IsAdminOrTechnician]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class FeedbackViewSet(viewsets.ModelViewSet):
    serializer_class = FeedbackSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['rating']
    ordering_fields = ['created_at']
    ordering = ['-created_at']

    def get_queryset(self):
        user = self.request.user
        if user.role in ['ADMIN', 'TECHNICIAN']:
            return Feedback.objects.all()
        return Feedback.objects.filter(user=user)

    def get_permissions(self):
        if self.action in ['create']:
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ['list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ['update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAuthenticated, IsOwner | IsAdminOrTechnician]
        else:
            permission_classes = [permissions.IsAuthenticated, IsAdminOrTechnician]
        return [permission() for permission in permission_classes]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

class ServiceRequestView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        # Bu yerda so'rov ma'lumotlarini qayta ishlash logikasi
        data = request.data
        
        # Ma'lumotlarni tekshirish
        required_fields = ['serviceType', 'deviceType', 'description', 'preferredDate', 'address', 'phoneNumber']
        if not all(field in data for field in required_fields):
            return Response(
                {"error": "Barcha kerakli maydonlarni to'ldiring"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Bu yerda ma'lumotlarni saqlash logikasi bo'ladi
        # Misol uchun:
        # service_request = ServiceRequest.objects.create(**data)
        
        # Mock response
        return Response(
            {
                "success": True,
                "message": "Xizmat so'rovingiz qabul qilindi",
                "data": {
                    "request_id": "12345",
                    "estimated_time": "1-3 ish kuni"
                }
            },
            status=status.HTTP_201_CREATED
        )