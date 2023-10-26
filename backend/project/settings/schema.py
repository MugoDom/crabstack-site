import graphene
from graphene_django import DjangoObjectType
from apps.blog.models import Blog

class BlogType(DjangoObjectType):
    class Meta:
        model = Blog
        fields = ("code","blogid","title","body", "is_published", "author", "created_date","modified_date", "image")

class Query(graphene.ObjectType):
    list_blogs=graphene.List(BlogType)
    
    def resolve_list_blogs(root, info):
        return Blog.objects.all()
    
schema = graphene.Schema(query=Query)
