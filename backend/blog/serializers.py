from rest_framework import serializers
from babel.dates import format_datetime
from django.utils import timezone

from blog.models import Article


class ArticleSerializer(serializers.ModelSerializer):
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