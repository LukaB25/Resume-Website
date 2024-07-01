from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
  list_display = ('title', 'technologies', 'school_project', 'created_at')
  list_filter = ('school_project', 'grade', 'created_at')
  search_fields = ('title', 'description', 'technologies')


admin.site.register(Project, ProjectAdmin)
