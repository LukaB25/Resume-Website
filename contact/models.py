from django.db import models


class Contact(models.Model):
  """
  Contact model for storing contact information.
  """
  CONTACT_CHOICES = [
    ('General Inquiry', 'General Inquiry'),
    ('Collaboration', 'Collaboration'),
    ('Job Opportunity', 'Job Opportunity'),
    ('Feedback', 'Feedback'),
    ('Bug Report', 'Bug Report'),
    ('Other', 'Other')
  ]
  name = models.CharField(max_length=100, verbose_name='Full Name')
  email = models.EmailField(verbose_name='Email Address')
  subject = models.CharField(
    max_length=20,
    choices=CONTACT_CHOICES,
    default='General Inquiry'
  )
  message = models.TextField(verbose_name='Message')
  read = models.BooleanField(default=False, verbose_name='Read')
  responded = models.BooleanField(default=False, verbose_name='Responded')
  created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created At')
  updated_at = models.DateTimeField(auto_now=True, verbose_name='Updated At')

  def __str__(self):
    return f'{self.name} sent {self.subject}. On: {self.created_at}'
  
  class Meta:
    verbose_name = 'Contact'
    verbose_name_plural = 'Contacts'
    ordering = ['-created_at']
