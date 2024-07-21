from rest_framework import viewsets
from .models import InterestMessage, ChatMessage
from .serializers import InterestMessageSerializer, ChatMessageSerializer

class InterestMessageViewSet(viewsets.ModelViewSet):
    queryset = InterestMessage.objects.all()
    serializer_class = InterestMessageSerializer

class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

