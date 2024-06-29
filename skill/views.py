from rest_framework import generics
from .models import TechnicalSkill, GeneralSkill
from .serializers import GeneralSkillSerializer, TechnicalSkillSerializer
from resume.permissions import IsAdminOrReadOnly

class TechnicalSkillList(generics.ListAPIView):
  queryset = TechnicalSkill.objects.all()
  serializer_class = TechnicalSkillSerializer
  permission_classes = [IsAdminOrReadOnly]


class GeneralSkillList(generics.ListAPIView):
  queryset = GeneralSkill.objects.all()
  serializer_class = GeneralSkillSerializer
  permission_classes = [IsAdminOrReadOnly]