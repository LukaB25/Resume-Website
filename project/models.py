from django.db import models


class Project(models.Model):
  """
  Model for project information.
  """
  title = models.CharField(max_length=200)
  excerpt = models.CharField(max_length=300, blank=True, null=True)
  description = models.TextField()
  github_url = models.URLField(blank=True, null=True)
  live_site_url = models.URLField(blank=True, null=True)
  image = models.ImageField(
        upload_to='images/',
        default='../code_iozqi5'
      )
  technologies = models.TextField()
  school_project = models.BooleanField(default=False)
  grade = models.CharField(max_length=20, blank=True, null=True)
  submitted_at = models.DateField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title
  
  class Meta:
    verbose_name_plural = "Projects"
    ordering = ['-created_at']
