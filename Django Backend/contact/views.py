from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MessageSerializer

@api_view(['POST'])
def submit_message(request):
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Message received successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ContactMessage
from .serializers import ContactMessageSerializer

@api_view(['POST'])
def submit_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'Message received!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # You can remove this if you're using proper CSRF headers
def contact_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        full_message = f"From: {name} <{email}>\n\nMessage:\n{message}"

        send_mail(
            subject,
            full_message,
            'yourserver@example.com',  # From email
            ['perez_st@icloud.com'],  # To email
            fail_silently=False,
        )

        return JsonResponse({'status': 'success'}, status=200)

    return JsonResponse({'error': 'Invalid request'}, status=400)
