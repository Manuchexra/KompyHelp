from rest_framework import permissions

class IsAdminOrTechnician(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and (
            request.user.role == 'ADMIN' or 
            request.user.role == 'TECHNICIAN'
        )

class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user