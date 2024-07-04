from django.urls import path
from .views import ExperienceList

urlpatterns = [
    path('experience/', ExperienceList.as_view()),
]