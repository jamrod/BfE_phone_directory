from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('contacts', views.ContactList.as_view(), name='contact_list'),
    path('contacts/<int:pk>', views.ContactDetail.as_view(), name='contact_detail')
]