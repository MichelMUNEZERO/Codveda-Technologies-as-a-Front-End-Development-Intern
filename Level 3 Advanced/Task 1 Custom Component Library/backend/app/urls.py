from django.urls import path
from . import views
urlpatterns = [
    path('siginup/', views.siginup, name='siginup'),
    path('signin/', views.signin, name='signin'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
]