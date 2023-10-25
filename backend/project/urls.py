from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from project.settings.schema import schema

urlpatterns = [
    path('bunker/', admin.site.urls),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_title = "Crabstack"
admin.site.site_header = "Crabstack Admin"
admin.site.index_title = "Welcome to Crabstack Admin Panel"
