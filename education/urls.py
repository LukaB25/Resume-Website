from django.urls import path
from .views import EducationList, CourseList

urlpatterns = [ 
    path('education/', EducationList.as_view()),
    path('courses/', CourseList.as_view()),
]
