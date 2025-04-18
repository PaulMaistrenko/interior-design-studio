from drf_spectacular.utils import extend_schema
from rest_framework import generics

from blog.models import Article
from blog.serializers import ArticleListSerializer, ArticleDetailSerializer


@extend_schema(
    summary="List of articles",
    description="Returns a list of articles about design trends. "
                "Each article includes its title, content, image, "
                "and creation date.",
    responses=ArticleListSerializer
)
class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer


class ArticleDetailView(generics.RetrieveAPIView):
    queryset = Article.objects.prefetch_related(
        "components__features", "components__advantages"
    )
    serializer_class = ArticleDetailSerializer
