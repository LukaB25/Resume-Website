from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from .models import Experience


class ExperienceSerializer(serializers.ModelSerializer):
  created_at = serializers.SerializerMethodField()
  updated_at = serializers.SerializerMethodField()
  start_date = serializers.DateField(format='%d %b %Y', input_formats=['%d %b %Y', 'iso-8601'])
  end_date = serializers.DateField(format='%d %b %Y', input_formats=['%d %b %Y', 'iso-8601'])
  
  def get_created_at(self, instance):
    return naturaltime(instance.created_at)
  
  def get_updated_at(self, instance):
    return naturaltime(instance.updated_at)
  class Meta:
    model = Experience
    fields = (
      'id',
      'company_name',
      'job_title',
      'location',
      'description',
      'achievements',
      'skills_gained',
      'start_date',
      'end_date',
      'created_at',
      'updated_at'
    )