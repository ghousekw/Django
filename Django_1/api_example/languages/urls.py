from django.urls import path, include
from . import views
from rest_framework import routers

# Initiate the router
router = routers.DefaultRouter()

# Register the router and set the endpoints
router.register('languages', views.LanguageView)

urlpatterns = [
    path('', include(router.urls)),
]
