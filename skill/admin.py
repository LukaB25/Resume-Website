from django.contrib import admin
from .models import TechnicalSkill, GeneralSkill


class TechnicalSkillAdmin(admin.ModelAdmin):
  list_display = ('skill_name', 'skill_level', 'created_at')
  list_filter = ('category', 'created_at')
  search_fields = ('skill_name', 'skill_level')


class GeneralSkillAdmin(admin.ModelAdmin):
  list_display = ('skill_name', 'created_at')
  list_filter = ('created_at',)
  search_fields = ('skill_name',)


admin.site.register(TechnicalSkill, TechnicalSkillAdmin)
admin.site.register(GeneralSkill, GeneralSkillAdmin)
