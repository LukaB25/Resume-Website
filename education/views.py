from rest_framework import generics
from .models import Education, Course
from .serializers import EducationSerializer, CourseSerializer
from resume.permissions import IsAdminOrReadOnly


class EducationList(generics.ListAPIView):
  queryset = Education.objects.all()
  serializer_class = EducationSerializer
  permission_classes = [IsAdminOrReadOnly]


class CourseList(generics.ListAPIView):
  queryset = Course.objects.all()
  serializer_class = CourseSerializer
  permission_classes = [IsAdminOrReadOnly]
