"""URLs to run the tests."""
from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import ListView
from django.conf import settings
from django.conf.urls.static import static

from ..models import Review

admin.autodiscover()

urlpatterns = [
    url(r'^review-listing/', ListView.as_view(model=Review),
        name='review_list'),
    url(r'^admin/', admin.site.urls),
    url(r'^umedia/', include('user_media.urls')),
    url(r'^review/', include('review.urls')),
    url(r'^api/', include('review.api.urls'))
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
    # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
