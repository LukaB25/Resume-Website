from django.contrib import admin
from .models import Experience


class ExperienceAdmin(admin.ModelAdmin):
  list_display = ('job_title', 'company_name', 'location', 'start_date', 'end_date')
  list_filter = ('location', 'start_date', 'end_date')
  search_fields = ('job_title', 'company_name', 'location')


admin.site.register(Experience, ExperienceAdmin)
