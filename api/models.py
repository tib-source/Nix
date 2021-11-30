from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()
onlineChoice = [
    ("o", "online"),
    ("b", "busy"),
    ("a", "away")
]

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
  user :USER OBJECT,  
  profile-picture: picture,
  followers: MANY TO MANY RELATIONSHIP,
  following:  MANY TO MANY RELATIONSHIP,
  story: [ picture/video ]
}
"""


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


# Post class
"""
post = { 
  user: USER OBJECT, 
  content-type: "video" | "picture" | "[array]",         # -> array can only contain "video" or "picture"
  content: "imgUrl" | "videoUrl" | "[array]",
  likes: ONE TO MANY RELATIONSHIP -> LIKE OBJECT,
  comments: ONE TO MANY -> COMMENT OBJECT,
}

like = { 
  user: USER OBJECT, 
  content: "POST OBJECT" | "COMMENT OBJECT",
}


comment = { 
    user: USER OBJECT, 
    text: "comment here", 
    parent: "POST OBJECT" | "COMMENT OBJECT",  -> helps with the indentation of comments -> only going to allow one level of indentation
    reply: boolean, 
    replyingTo: USER OBJECT,
    likes:  ONE TO MANY RELATIONSHIP -> LIKE OBJECT
  }

"""
