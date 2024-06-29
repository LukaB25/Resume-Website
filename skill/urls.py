from django.urls import path
from .views import TechnicalSkillList, GeneralSkillList

urlpatterns = [
  path('api/technical-skill/', TechnicalSkillList.as_view(), name='technical-skills'),
  path('api/general-skill/', GeneralSkillList.as_view(), name='general-skills'),
]
