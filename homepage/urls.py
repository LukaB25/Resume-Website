from django.urls import path
from .views import PersonalInfoList

urlpatterns = [
    path('api/personal-info/', PersonalInfoList.as_view()),
]
