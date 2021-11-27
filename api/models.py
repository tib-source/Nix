from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()
onlineChoice = [
    ("o", "online"),
    ("b", "busy"),
    ("a", "away")
]


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50, null=True)
    last_name = models.CharField(max_length=50, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    user_bio = models.TextField(blank=True)
    profile_picture = models.ImageField(
        default='default.jpg', upload_to='profile_picures')
    followers = models.ManyToManyField(User, related_name="followers")
    following = models.ManyToManyField(User, related_name="following")
    story = models.ImageField(upload_to='stories', null=True)
    online = models.CharField(
        max_length=10, choices=onlineChoice, default='online')


""" 
user model design : 


user = {
  username : string ,
  first-name: string,
  last-name: string, 
  email: string, 
  phone-number: string, 
  online: away || busy || active
}


profile = { 
  user :foreignKey,  
  profile-picture: picture,
  followers: MANY TO MANY RELATIONSHIP,
  following:  MANY TO MANY RELATIONSHIP,
  story: [ picture/video ]
}
"""
