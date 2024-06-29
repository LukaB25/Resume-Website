from django.urls import path
from .views import ProjectList

urlpatterns = [
  path('api/project/', ProjectList.as_view(),),
]
