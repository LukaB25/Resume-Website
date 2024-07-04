from django.urls import path
from .views import PersonalInfoList

urlpatterns = [
    path('personal-info/', PersonalInfoList.as_view()),
]
