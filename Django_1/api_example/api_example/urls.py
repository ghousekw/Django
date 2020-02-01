from django.contrib import admin
# Using include to import app urls
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("languages.urls")),
]
