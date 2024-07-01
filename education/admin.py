from django.contrib import admin
from .models import Education, Course


class EducationAdmin(admin.ModelAdmin):
  list_display = ('school', 'title', 'location', 'start_date', 'end_date')
  list_filter = ('location', 'created_at')
  search_fields = ('school', 'title', 'location')


class CourseAdmin(admin.ModelAdmin):
  list_display = ('course_name', 'title', 'start_date', 'end_date')
  list_filter = ('created_at',)
  search_fields = ('course_name', 'title')


admin.site.register(Education, EducationAdmin)
admin.site.register(Course)
