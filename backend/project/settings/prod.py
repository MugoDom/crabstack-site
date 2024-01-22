from .base import *
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['.vercel.app']

CORS_ALLOWED_ORIGINS = [
'crabstack-8ay6.vercel.app'
]
CORS_ALLOWED_METHODS = [
'DELETE', 'GET', 'PUT', 'OPTIONS', 'PATCH', 'POST'
]


#HTTPS Settings
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

#HSTS Settings
SECURE_HSTS_SECONDS = 3153600
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True