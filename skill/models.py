from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class TechnicalSkill(models.Model):
  """
  Model for technical skill information.
  I.E. Programming languages, frameworks, etc.
  """
  CATEGORY_CHOICES = [
        ('language', 'Language'),
        ('framework', 'Framework'),
        ('libraries', 'Libraries'),
        ('database', 'Database'),
        ('version_control', 'Version Control'),
        ('methodologies', 'Methodologies'),
        ('other', 'Other')
    ]
  skill_name = models.CharField(max_length=200)
  skill_level = models.PositiveIntegerField(
    validators=[MinValueValidator(0), MaxValueValidator(100)]
  )
  category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')

  def __str__(self):
    return self.skill_name
  
  class Meta:
    verbose_name_plural = "Technical Skills"
    ordering = ['skill_name']


class GeneralSkill(models.Model):
  """
  Model for general skill information.
  Skills gained from previous experiences, I.E. communication,
  problem solving, etc.
  """
  skill_name = models.CharField(max_length=200)

  def __str__(self):
    return self.skill_name
  
  class Meta:
    verbose_name_plural = "General Skills"
    ordering = ['skill_name']