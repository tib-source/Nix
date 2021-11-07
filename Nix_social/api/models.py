from django.db import models
from django.contrib.auth.models import User
# Create your models here.

onlineChoice = [
  ("o", "online"),
  ("b", "busy"),
  ("a", "away")
]

class Profile(models.Model): 
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  profile_picture= models.ImageField(upload_to='profile_picures')
  followers = models.ManyToManyField(User)
  following = models.ManyToManyField(User)
  story = models.ImageField(upload_to='stories') 
  online = models.CharField(max_length=10, choices=onlineChoice, default='online')

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
