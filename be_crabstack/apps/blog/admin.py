"""Admin settings for blog app"""
from django.contrib import admin
from .models import Blog

class BlogAdmin(admin.ModelAdmin):
	"""Fields to be displayed"""
	list_display = ('title', 'is_published', 'author', 'created_date','modified_date', 'image')
	list_filter = ('author', 'title', 'created_date', 'modified_date')
	search_fields = ('author', 'title', 'created_date')
	prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blog, BlogAdmin)
