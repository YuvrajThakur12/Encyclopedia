from django.db import models

# Create your models here.
class Subject(models.Model):
    Sid = models.IntegerField(primary_key=True)
    Sname = models.CharField(max_length=20)
    Sdesc = models.TextField()



class Topic(models.Model):
    Tid = models.IntegerField(primary_key=True)
    Sid = models.IntegerField()
    Tname = models.CharField(max_length=20)
    Tdesc = models.TextField()
