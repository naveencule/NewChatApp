from django.db import models
from django.contrib.auth.models import User

class InterestMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sent_interest_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='received_interest_messages', on_delete=models.CASCADE)
    message = models.TextField()
    accepted = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

class ChatMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sent_chat_messages', on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='received_chat_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

