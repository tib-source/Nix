from django.conf.urls import url
from django.urls.conf import re_path
from .views import index

urlpatterns = [
    re_path('', index)
]
