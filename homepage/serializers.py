from rest_framework import serializers
from .models import PersonalInfo


class PersonalInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = PersonalInfo
    fields = (
      'id',
      'name',
      'title',
      'email',
      'phone',
      'address',
      'summary',
      'image',
      'diploma_image',
      'technologies_learned',
      'github_url',
      'linkedin_url',
      'twitter_url',
      'facebook_url',
      'instagram_url',
      'youtube_url',
      'created_at',
      'updated_at'
    )
