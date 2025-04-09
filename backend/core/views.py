from django.db.models import QuerySet
from rest_framework import generics
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample
from drf_spectacular.types import OpenApiTypes

from core.models import (
    Tag,
    ProjectStyle,
    Project,
    ProjectConfiguration,
    Article,
    Consultation
)
from core.serializers import (
    TagSerializer,
    ProjectStyleSerializer,
    ProjectListSerializer,
    ProjectDetailSerializer,
    ProjectConfigurationSerializer,
    ArticleSerializer,
    ConsultationSerializer
)
from core.pagination import TagStylePagination


@extend_schema(
    summary="List of tags",
    description="Returns all available tags for filtering projects. "
                "Each tag includes its unique ID and name.",
    responses={
        200: OpenApiExample(
            "Successful Response",
            value={
                "count": 2,
                "next": None,
                "previous": None,
                "results": [
                    {"id": 1, "name": "tag sample 1"},
                    {"id": 2, "name": "tag sample 2"}
                ]
            }
        )
    }
)
class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = TagStylePagination


@extend_schema(
    summary="List of project styles",
    description="Returns all available project styles for filtering projects. "
                "Each style includes its unique ID and name.",
    responses={
        200: OpenApiExample(
            "Successful Response",
            value={
                "count": 2,
                "next": None,
                "previous": None,
                "results": [
                    {"id": 1, "name": "style sample 1"},
                    {"id": 2, "name": "style sample 2"}
                ]
            }
        )
    }
)
class ProjectStyleListView(generics.ListAPIView):
    queryset = ProjectStyle.objects.all()
    serializer_class = ProjectStyleSerializer
    pagination_class = TagStylePagination


@extend_schema(
    summary="List of projects",
    description="Returns a list of projects. "
                "You can filter projects by passing a comma-separated list of style IDs "
                "with the 'styles' parameter and tag IDs with the 'tags' parameter. "
                "Example: api/core/projects/?styles=1,2&tags=3,4",
    parameters=[
        OpenApiParameter(
            name="styles",
            type=OpenApiTypes.STR,
            description="Comma-separated list of style IDs to filter projects, "
                        "e.g., 'styles=1,2'.",
            required=False
        ),
        OpenApiParameter(
            name="tags",
            type=OpenApiTypes.STR,
            description="Comma-separated list of tag IDs to filter projects, "
                        "e.g., 'tags=3,4'.",
            required=False
        ),
    ],
    responses={
        200: OpenApiExample(
            "Successful Response",
            value={
                "count": 1,
                "next": None,
                "previous": None,
                "results": [
                    {
                        "id": 1,
                        "name": "project sample",
                        "description": "description sample",
                        "style": "style sample",
                        "tags": ["tag 1", "tag 2", "tag 3"],
                        "main_image": "https://localhost:8000/media/projects/main_image/image.jpg"
                    }
                ]
            }
        )
    }
)
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


@extend_schema(
    summary="Retrieve project details",
    description="Returns detailed information about a single project, "
                "including its main data, style, tags, and a gallery of images "
                "with absolute URLs.",
    responses={
        200: OpenApiExample(
            "Successful Response",
            value={
                "count": 2,
                "next": None,
                "previous": None,
                "results": [
                    {
                        "id": 1,
                        "name": "project sample",
                        "description": "description sample",
                        "style": "style sample",
                        "tags": ["tag 1", "tag 2", "tag 3"],
                        "main_image": "https://localhost:8000/media/projects/main_image/image.jpg",
                        "gallery": [
                            "https://localhost:8000/media/projects/main_image/image1.jpg",
                            "https://localhost:8000/media/projects/main_image/image1.jpg",
                            "https://localhost:8000/media/projects/main_image/image1.jpg"
                        ]
                    }
                ]
            }
        )
    }
)
class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.select_related("style").prefetch_related("tags")
    serializer_class = ProjectDetailSerializer


@extend_schema(
    summary="List of project configurations",
    description="Returns a list of available project configurations with "
                "pricing details and associated services. Used to display "
                "pricing options based on various service combinations."
)
class ProjectConfigurationListView(generics.ListAPIView):
    queryset = ProjectConfiguration.objects.prefetch_related("services")
    serializer_class = ProjectConfigurationSerializer


@extend_schema(
    summary="List of articles",
    description="Returns a list of articles about design trends. "
                "Each article includes its title, content, image, "
                "and creation date."
)
class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


@extend_schema(
    summary="Create a new consultation request",
    description="Allows users to submit a consultation request by "
                "providing their name, phone number, and a brief "
                "description of their question."
)
class ConsultationCreateView(generics.CreateAPIView):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer
