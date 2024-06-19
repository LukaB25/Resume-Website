from django.db import models


class Experience(models.Model):
  """
  Model for work experience information.
  """
  company_name = models.CharField(max_length=200)
  job_title = models.CharField(max_length=150)
  location = models.CharField(max_length=150)
  description = models.TextField()
  achievements = models.TextField(blank=True, null=True)
  skills_gained = models.TextField(blank=True, null=True)
  start_date = models.DateField()
  end_date = models.DateField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.job_title
  
  class Meta:
    ordering = ['-end_date']
    verbose_name_plural = "Work Experience"
