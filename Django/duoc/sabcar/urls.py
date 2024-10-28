from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import index, contacto, lash, nails

urlpatterns = [
    path('', index, name='home'),
    path('index', index, name='index'),
    path('contacto', contacto, name='contacto'),
    path('lash', lash, name='lash'),
    path('nails', nails, name='nails'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
