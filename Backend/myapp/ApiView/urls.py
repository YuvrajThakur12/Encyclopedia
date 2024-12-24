from django.urls import path
from . import views

urlpatterns = [
    path('Subject/', views.Subjects),
    path('Topic/<int:tid>', views.topics),
]
