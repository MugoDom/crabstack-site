from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
import uuid

class User(AbstractUser):
    pkid = models.BigAutoField(primary_key=True, editable=False)
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    username = models.CharField(verbose_name='Username', max_length=25, unique=True)
    first_name = models.CharField(verbose_name='First Name', max_length=25)
    last_name = models.CharField(verbose_name='Last Name', max_length=25)
    email = models.EmailField(verbose_name='Email Address', unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_created = models.DateTimeField(default=timezone.now) #use 'auto_now_add=True' to enforce integrity

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = "users"