from django.db.models import fields
from rest_framework import serializers
from .models import Comment, Likes, Post, Profile


class profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        read_only_fields = ('id', 'created_at', 'user_bio', 'user')
        fields = ('id', 'created_at', 'user_bio', 'user')


class postSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class likesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = "__all__"


class commentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
