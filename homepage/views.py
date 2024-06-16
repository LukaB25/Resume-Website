from rest_framework import generics
from .models import PersonalInfo
from .serializers import PersonalInfoSerializer
from resume.permissions import IsAdminOrReadOnly

class PersonalInfoList(generics.ListAPIView):
  queryset = PersonalInfo.objects.all()
  serializer_class = PersonalInfoSerializer
  permission_classes = [IsAdminOrReadOnly]