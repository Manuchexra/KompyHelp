from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_create_tickets, name='list_create_tickets'),
    path('<int:ticket_id>/', views.get_update_ticket, name='get_update_ticket'),
    path('<int:ticket_id>/comments/', views.add_comment, name='add_comment'),
    path('my-tickets/', views.my_tickets, name='my_tickets'),
]
