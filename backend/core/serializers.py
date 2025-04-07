from rest_framework import serializers

from core.models import Tag, ProjectStyle


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ("id", "name")


class ProjectStyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectStyle
        fields = ("id", "name")
