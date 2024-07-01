from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer


class ContactCreateView(generics.CreateAPIView):
  """
  View to create a new message.
  """
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer
