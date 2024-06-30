from rest_framework import serializers
from .models import Project


class ProjectsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = (
      'id',
      'title',
      'excerpt',
      'image',
      'created_at',
      'updated_at'
    )


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = (
      'id',
      'title',
      'excerpt',
      'description',
      'github_url',
      'live_site_url',
      'image',
      'technologies',
      'school_project',
      'grade',
      'submitted_at',
      'created_at',
      'updated_at'
    )
