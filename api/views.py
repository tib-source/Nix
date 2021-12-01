from django.contrib.auth import authenticate
from django.db.models import query
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.utils import serializer_helpers
from rest_framework.views import APIView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from rest_framework import serializers, viewsets

from .models import Comment, Likes, Post, Profile
from .serializers import commentSerializer, likesSerializer, postSerializer, profileSerializer

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


class PostView(viewsets.ModelViewSet):
    serializer_class = postSerializer
    queryset = Post.objects.all()

    def get_post_from_id(self, id):
        return self.queryset.filter(id=id)

    def get_post_from_user(self, User):
        return self.queryset.filter(User=User)


class LikesView(viewsets.ModelViewSet):
    serializer_class = likesSerializer
    queryset = Likes.objects.all()

    def get_likes_for_post(self, Post):
        return self.queryset.filter(Post=Post)

    def get_likes_for_comment(self, Comment):
        return self.queryset.filter(Comment=Comment)


class CommentView(viewsets.ModelViewSet):
    serializer_class = commentSerializer
    queryset = Comment.objects.all()

    def get_comment_for_post(self, Post):
        return self.queryset.filter(Post=Post)

    def get_likes_for_comment(self, Comment):
        return self.queryset.filter(Comment=Comment)
