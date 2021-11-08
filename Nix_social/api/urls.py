from django.urls import path
from django.urls.conf import include
from .models import Register

urlpatterns = [
    path('register/', Register.as_view())
]
