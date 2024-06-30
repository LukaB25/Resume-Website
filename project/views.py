from rest_framework import generics
from .models import Project
from .serializers import ProjectsSerializer, ProjectSerializer
from resume.permissions import IsAdminOrReadOnly

class ProjectsList(generics.ListAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectsSerializer
  permission_classes = [IsAdminOrReadOnly]


class ProjectDetail(generics.RetrieveAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  permission_classes = [IsAdminOrReadOnly]