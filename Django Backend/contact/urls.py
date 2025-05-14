from django.urls import path
from .views import submit_message
from .views import my_messages

urlpatterns = [
    path('contact/', submit_message, name='submit_message'),
    path('api/messages/', my_messages),
]
