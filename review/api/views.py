from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .serializer import ReviewSerializer, RatingSerializer, RatingCategorySerializer
from ..models import Review, Rating, RatingCategory


class ReviewListCreateView(ListCreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class ReviewRUDView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class RatingListCreateView(ListCreateAPIView):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


class RatingRUDView(RetrieveUpdateDestroyAPIView):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


class RatingCategoryListCreateView(ListCreateAPIView):
    serializer_class = RatingCategorySerializer
    queryset = RatingCategory.objects.all()


class RatingCategoryRUDView(RetrieveUpdateDestroyAPIView):
    serializer_class = RatingCategorySerializer
    queryset = RatingCategory.objects.all()
