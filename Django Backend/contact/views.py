from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from django.core.mail import send_mail

@api_view(['POST'])
def submit_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        # Send email
        name = serializer.validated_data.get('name')
        email = serializer.validated_data.get('email')
        subject = serializer.validated_data.get('subject', 'PORTFOLIO NOTIFICATIONsss')
        phone = serializer.validated_data.get('phone')
        message = serializer.validated_data.get('message')

        # full_message = f"From: {name} <{email}>\n\n{message}"
        full_message = f"""
        
        {name} is reaching out to you!
        
        {message}
        
        {email}
        {phone}
        """.strip()

        try:
            send_mail(
                subject=subject,
                message=full_message,
                from_email='perez_st@icloud.com',  # must match your SMTP config
                recipient_list=['perez_st@icloud.com'],
                fail_silently=False
            )
            return Response({'success': 'Message received and email sent!'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': f'Message saved, but email failed: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_messages(request):
    # Fetch messages for the authenticated user (you)
    messages = [
        {"id": 1, "text": "New contact form message from John"},
        {"id": 2, "text": "Another inquiry from the site"},
    ]
    return Response(messages)
