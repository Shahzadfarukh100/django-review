from django.conf.urls import url
from .views import (ReviewRUDView,
                    ReviewListCreateView,
                    RatingRUDView,
                    RatingListCreateView,
                    RatingCategoryRUDView,
                    RatingCategoryListCreateView
                    )

urlpatterns = [
    url(r'review/(?P<pk>[0-9]+)$', ReviewRUDView.as_view(), name='review-rud'),

    url(r'review/$', ReviewListCreateView.as_view(), name='review-create-list'),

    url(r'rating/(?P<pk>[0-9]+)$', RatingRUDView.as_view(), name='rating-rud'),

    url(r'rating/$', RatingListCreateView.as_view(), name='rating-create-list'),

    url(r'category/(?P<pk>[0-9]+)$', RatingCategoryRUDView.as_view(), name='category-rud'),

    url(r'category/$', RatingCategoryListCreateView.as_view(), name='category-create-list'),

]
