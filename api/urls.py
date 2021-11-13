from django.urls import path
from django.urls.conf import include
from django.conf.urls import url
from .views import ProfileView, Register
from rest_framework import routers

router = routers.DefaultRouter()
router.register('profile', ProfileView, basename='profile')

urlpatterns = [
    url('', include(router.urls)),
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.authtoken'))
]
