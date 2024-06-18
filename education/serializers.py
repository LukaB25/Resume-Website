from rest_framework import serializers
from .models import Education, Course

class EducationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Education
    fields = (
      'id',
      'school',
      'title',
      'description',
      'school_url',
      'start_date',
      'end_date',
      'created_at',
      'updated_at'
    )


class CourseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Course
    fields = (
      'id',
      'course_name',
      'title',
      'description',
      'website',
      'start_date',
      'end_date',
      'created_at',
      'updated_at'
    )
