from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
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

@csrf_exempt
def signin(request):
    if request.method == 'GET':
        return JsonResponse({
            'message': 'Signin endpoint is working. Send a POST request with username and password to log in.'
        })

    if request.method == 'POST':
        data = json.loads(request.body)

        identifier = (data.get('username') or '').strip()
        password = data.get('password')

        if not identifier or not password:
            return JsonResponse({'error': 'Username/email and password are required'}, status=400)

        username = identifier
        if '@' in identifier:
            matched_user = User.objects.filter(email__iexact=identifier).first()
            if matched_user:
                username = matched_user.username

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        return JsonResponse({'error': 'Invalid credentials'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def forgot_password(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        email = data.get('email')

        if not User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email not found'}, status=400)

        return JsonResponse({'message': 'Password reset link would be sent'})

    return JsonResponse({'error': 'Invalid request method. Use GET or POST.'}, status=405)