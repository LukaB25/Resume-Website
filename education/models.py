from django.db import models


class Education(models.Model):
  """
  Model for education information.
  """
  school = models.CharField(max_length=200)
  title = models.CharField(max_length=150)
  location = models.CharField(max_length=150)
  description = models.TextField()
  school_url = models.URLField(blank=True, null=True)
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title
  
  class Meta:
    ordering = ['-end_date']
    verbose_name_plural = "Education Information"


class Course(models.Model):
  """
  Model for courses information.
  """
  course_name = models.CharField(max_length=200)
  title = models.CharField(max_length=150)
  description = models.TextField()
  website = models.URLField(blank=True, null=True)
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title
  
  class Meta:
    verbose_name_plural = "Courses"
