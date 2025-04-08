from rest_framework import serializers
from babel.dates import format_datetime
from django.utils import timezone

from core.models import (
    Tag,
    ProjectStyle,
    Project,
    ProjectConfiguration,
    Article,
)


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name")


class ProjectStyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStyle
        fields = ("id", "name")


class ProjectListSerializer(serializers.ModelSerializer):
    style = serializers.SlugRelatedField(
        read_only=True,
        slug_field="name"
    )
    tags = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field="name"
    )

    class Meta:
        model = Project
        fields = (
            "id", "name", "description", "style", "tags", "main_image"
        )


class ProjectDetailSerializer(ProjectListSerializer):
    gallery = serializers.SerializerMethodField()

    class Meta(ProjectListSerializer.Meta):
        fields = ProjectListSerializer.Meta.fields + ("gallery",)

    def get_gallery(self, obj):
        request = self.context.get("request")
        return [
            request.build_absolute_uri(img.image.url)
            for img in obj.gallery.all()
        ]


class ProjectConfigurationSerializer(serializers.ModelSerializer):
    services = serializers.SlugRelatedField(
        read_only=True,
        many=True,
        slug_field="name"
    )

    class Meta:
        model = ProjectConfiguration
        fields = ("id", "name", "price", "services")


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
