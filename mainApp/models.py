from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Users(AbstractUser):
    odflghfhgkdfjgdf = models.TextField(blank=True,null=True)

class ProdPict(models.Model):
    Img=models.ImageField(upload_to='static/img')

class Product(models.Model):
    Naming=models.CharField(max_length=200, blank=True,null=True)
    Price=models.IntegerField( blank=True,null=True)
    Pics=models.ImageField(upload_to='static/img',null=True)
    Description=models.TextField(max_length=1000, blank=True,null=True)
    Stars=models.FloatField(blank=True, default=0)
    CountStars=models.IntegerField(blank=True, default=0)


class Cart(models.Model):
    ProdList=models.ManyToManyField(Product, blank=True)
    User=models.OneToOneField(Users, on_delete=models.CASCADE)


