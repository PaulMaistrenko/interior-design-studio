from django.urls import path

from core.views import TagListView


urlpatterns = [
    path("tags/", TagListView.as_view(), name="tag-list"),
]

app_name = "core"
