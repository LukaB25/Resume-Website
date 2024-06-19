from rest_framework import serializers
from .models import Experience


class ExperienceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Experience
    fields = (
      'id',
      'company_name',
      'job_title',
      'description',
      'achievements',
      'skills_gained',
      'start_date',
      'end_date',
      'created_at',
      'updated_at'
    )