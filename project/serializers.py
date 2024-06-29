from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = (
      'id',
      'title',
      'description',
      'github_url',
      'live_site_url',
      'technologies',
      'school_project',
      'grade',
      'submitted_at',
      'created_at',
      'updated_at'
    )
