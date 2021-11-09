from django.urls import path
from django.urls.conf import include
from .views import Register

urlpatterns = [
    path('register/', Register.as_view())
]
