from django.db.models import QuerySet
from rest_framework import generics

from core.models import Tag, ProjectStyle, Project, ProjectConfiguration
from core.serializers import (
    TagSerializer,
    ProjectStyleSerializer,
    ProjectListSerializer,
    ProjectDetailSerializer,
    ProjectConfigurationSerializer,
)


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProjectStyleListView(generics.ListAPIView):
    queryset = ProjectStyle.objects.all()
    serializer_class = ProjectStyleSerializer


class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectListSerializer

    @staticmethod
    def _params_to_int(query_string: str) -> list[int]:
        """Converts a string of format '1,2,3' to a list of integers [1, 2, 3]."""
        return [int(str_id) for str_id in query_string.split(",") if str_id.isdigit()]

    def get_queryset(self) -> QuerySet:
        queryset = Project.objects.select_related("style").prefetch_related("tags")

        styles = self.request.query_params.get("styles")
        if styles:
            styles = self._params_to_int(styles)
            queryset = queryset.filter(style_id__in=styles)

        tags = self.request.query_params.get("tags")
        if tags:
            tags = self._params_to_int(tags)
            queryset = queryset.filter(tags__id__in=tags)

        return queryset.distinct()


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.select_related("style").prefetch_related("tags")
    serializer_class = ProjectDetailSerializer


class ProjectConfigurationListView(generics.ListAPIView):
    queryset = ProjectConfiguration.objects.prefetch_related("services")
    serializer_class = ProjectConfigurationSerializer
