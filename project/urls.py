from django.urls import path
from .views import ProjectsList, ProjectDetail

urlpatterns = [
  path('api/projects/', ProjectsList.as_view(),),
  path('api/projects/<int:pk>/', ProjectDetail.as_view(),),
]
