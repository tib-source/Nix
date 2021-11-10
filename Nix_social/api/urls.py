from django.urls import path
from django.urls.conf import include
from django.conf.urls import url
from .views import Register

urlpatterns = [
    path('register/', Register.as_view()),
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.authtoken'))
]
