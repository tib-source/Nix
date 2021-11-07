from django.db import models

# Create your models here.

class User(models.Model):

  pass


""" 
user model design : 


user = {
  id = number(unique=true)  
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
