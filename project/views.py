from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer
from resume.permissions import IsAdminOrReadOnly

class ProjectList(generics.ListAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  permission_classes = [IsAdminOrReadOnly]
