"""
todocrud URL Configuration
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('todos.api.urls')),
    path('api/auth/', include('accounts.api.urls')),
    path('admin/', admin.site.urls),
]
