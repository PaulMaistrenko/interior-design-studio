from rest_framework import generics

from core.models import Tag, ProjectStyle
from core.serializers import TagSerializer, ProjectStyleSerializer


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProjectStyleListView(generics.ListAPIView):
    queryset = ProjectStyle.objects.all()
    serializer_class = ProjectStyleSerializer
