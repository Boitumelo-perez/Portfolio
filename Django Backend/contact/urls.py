from django.urls import path
from .views import submit_message

urlpatterns = [
    path('contact/', submit_message, name='submit_message'),
]
