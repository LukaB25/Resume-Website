from django.db import models


class PersonalInfo(models.Model):
  """
  Model for personal information.
  """
  name = models.CharField(max_length=100)
  email = models.EmailField()
  phone = models.CharField(max_length=20)
  address = models.TextField()
  summary = models.TextField()
  image = models.ImageField(
    upload_to='images/',
    default='../profile_icon_wzhhsa',
    blank=True,
    null=True
  )
  github_url = models.URLField(blank=True, null=True)
  linkedin_url = models.URLField(blank=True, null=True)
  twitter_url = models.URLField(blank=True, null=True)
  facebook_url = models.URLField(blank=True, null=True)
  instagram_url = models.URLField(blank=True, null=True)
  youtube_url = models.URLField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name
  
  class Meta:
    verbose_name_plural = "Personal Information"
