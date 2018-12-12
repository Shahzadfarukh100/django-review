from ..models import Review, Rating, RatingCategory
from rest_framework import serializers
from parler_rest.serializers import TranslatableModelSerializer, TranslatedFieldsField


class ReviewSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='review-rud'
    )
    user = serializers.ReadOnlyField(source='user.username')
    rating = serializers.ReadOnlyField(source='rating.value')

    class Meta:
        model = Review
        fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='rating-rud'
    )

    class Meta:
        model = Rating
        fields = '__all__'


class RatingCategorySerializer(TranslatableModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='category-rud'
    )
    translations = TranslatedFieldsField(shared_model=RatingCategory)

    class Meta:
        model = RatingCategory
        fields = ('id', 'url', 'identifier', 'counts_for_average', 'translations')
