from rest_framework import serializers
from .models import Profile


class profileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        read_only_fields = ('id', 'created_at', 'user_bio', 'user')
        fields = ('id', 'created_at', 'user_bio', 'user')
