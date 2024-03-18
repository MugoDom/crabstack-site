from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["0.0.0.0","localhost", "backend", "127.0.0.1"]

CORS_ALLOWED_ORIGINS = [
'http://localhost:3000', 'http://127.0.0.1:3000', 'http://0.0.0.0'
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOWED_METHODS = [
'DELETE', 'GET', 'PUT', 'OPTIONS', 'PATCH', 'POST'
]

#HTTPS Settings
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False
SECURE_SSL_REDIRECT = False

#HSTS Settings
SECURE_HSTS_SECONDS = 3153600
SECURE_HSTS_PRELOAD = False
SECURE_HSTS_INCLUDE_SUBDOMAINS = False

