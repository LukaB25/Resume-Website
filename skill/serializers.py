from rest_framework import serializers
from .models import TechnicalSkill, GeneralSkill


class TechnicalSkillSerializer(serializers.ModelSerializer):
  skill_label = serializers.SerializerMethodField()

  def get_skill_label(self, obj):
    if obj.skill_level <=40:
      return 'Beginner'
    elif obj.skill_level <=70:
      return 'Intermediate'
    else:
      return 'Advanced'
    
  class Meta:
    model = TechnicalSkill
    fields = (
      'id',
      'skill_name',
      'skill_level',
      'skill_label',
      'category',
      'created_at',
      'updated_at'
    )


class GeneralSkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = GeneralSkill
    fields = (
      'id',
      'skill_name',
      'created_at',
      'updated_at'
    )
