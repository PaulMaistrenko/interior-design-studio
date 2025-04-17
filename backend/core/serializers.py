from rest_framework import serializers

from core.models import (
    Tag,
    ProjectStyle,
    Project,
    ProjectConfiguration,
    Consultation,
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


class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = ("customer_name", "phone_number", "question")
