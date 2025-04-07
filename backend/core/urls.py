from django.urls import path

from core.views import TagListView, ProjectStyleListView


urlpatterns = [
    path("tags/", TagListView.as_view(), name="tag-list"),
    path(
        "project-styles/",
        ProjectStyleListView.as_view(),
        name="project-style-list"
    ),
]

app_name = "core"
