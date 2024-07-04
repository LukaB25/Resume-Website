from django.urls import path
from .views import ProjectsList, ProjectDetail

urlpatterns = [
  path('projects/', ProjectsList.as_view(),),
  path('projects/<int:pk>/', ProjectDetail.as_view(),),
]
