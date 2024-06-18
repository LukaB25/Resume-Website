from django.urls import path
from .views import EducationList, CourseList

urlpatterns = [ 
    path('api/education/', EducationList.as_view()),
    path('api/courses/', CourseList.as_view()),
]
