from django.contrib.auth import authenticate
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
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


