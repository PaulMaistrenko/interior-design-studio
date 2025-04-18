from rest_framework import serializers
from babel.dates import format_datetime
from django.utils import timezone

from blog.models import Article, ArticleComponent


class ArticleListSerializer(serializers.ModelSerializer):
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ("id", "title", "content", "image", "created_at")

    def get_created_at(self, obj):
        local_time = timezone.localtime(obj.created_at)
        formatted = format_datetime(local_time, "dd MMM y", locale="uk")
        day, month, year = formatted.split(" ")
        month = month.capitalize()
        return f"{day} {month} {year}"


class ArticleComponentSerializer(serializers.ModelSerializer):
    advantages = serializers.SerializerMethodField()
    features = serializers.SerializerMethodField()

    class Meta:
        model = ArticleComponent
        fields = (
            "id",
            "number",
            "title",
            "description",
            "advantages",
            "features",
            "image"
        )

    def get_advantages(self, obj):
        return [adv.name for adv in obj.advantages.all()]

    def get_features(self, obj):
        return [feat.name for feat in obj.features.all()]
