from django.urls import path
from .views import ExperienceList

urlpatterns = [
    path('api/experience/', ExperienceList.as_view()),
]