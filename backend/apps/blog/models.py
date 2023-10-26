"""Models for blog app"""
from django.conf import settings
import uuid
from django.db import models

User = settings.AUTH_USER_MODEL

class Blog(models.Model):
    blogid = models.AutoField(primary_key=True, editable=False,db_column='blogid')
    code = models.UUIDField(default=uuid.uuid4, editable=False, unique=True,db_column='code')
    title = models.CharField(max_length=100,db_column='title')
    slug = models.SlugField(null=False, unique=True,db_column='slug')
    body = models.TextField(db_column='body')
    author = models.ForeignKey(User,related_name="blogs", on_delete=models.CASCADE,db_column='author')
    is_published = models.BooleanField(default=False, verbose_name="Publish Status", help_text="Publish Status",db_column='published')
    created_date = models.DateField(auto_now_add=True,db_column='created_date')
    modified_date = models.DateField(auto_now=True,db_column='modfied_date')
    image = models.ImageField(default='default.png', blank=True,db_column='image')

    class Meta:
        ordering = ['-created_date',]
        verbose_name = "Blogs"
        verbose_name_plural = "Blogs"
        db_table = "blogs"

    def __str__(self):
        return self.title
    
    def snippet(self):
        return self.body[:140] + '....'
