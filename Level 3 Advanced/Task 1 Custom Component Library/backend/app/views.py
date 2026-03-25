from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
import json

def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'User already exists'}, status=400)

        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return JsonResponse({'message': 'User created successfully'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)

def signin(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        return JsonResponse({'error': 'Invalid credentials'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


def forgot_password(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        email = data.get('email')

        if not User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email not found'}, status=400)

        return JsonResponse({'message': 'Password reset link would be sent'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)