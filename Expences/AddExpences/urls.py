
from django.contrib import admin
from django.urls import path
from django.urls import include
from .views import expences_views
urlpatterns = [
    path('add_expences', expences_views.add_record),
    path('show_expences', expences_views.show_record)
]
