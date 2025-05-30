from django.urls import path
from .views import ServiceRequestView, HealthCheckView

urlpatterns = [
    path('health-check/', HealthCheckView.as_view(), name='health-check'),
    path('service-request/', ServiceRequestView.as_view(), name='service-request'),
    # Boshqa API endpointlar...
]