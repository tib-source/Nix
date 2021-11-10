from django.contrib.auth import authenticate
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from rest_framework import viewsets

from Nix_social.api.models import Profile
from Nix_social.api.serializers import profileSerializer

# Create your views here.


class Register(APIView):
    def post(request, *args, **kwargs):
        form = UserCreationForm(request.POST)

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            login(request, user)
            return JsonResponse(data={
                "Message": "User Logged In Successfully"
            })


class ProfileView(viewsets.ModelViewSet):
    serializer_class = profileSerializer
    queryset = Profile.objects.all()

    def get_profile(self):
        return self.queryset.filter(user=self.request.user)
