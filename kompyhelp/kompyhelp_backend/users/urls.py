from django.urls import path
from .views import LoginView, LogoutView, CurrentUserView, UserListView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('users/me/', CurrentUserView.as_view(), name='current-user'),
    path('users/', UserListView.as_view(), name='user-list'),
    path('admin/users/', UserListView.as_view(), name='admin-user-list'),
]