from django.urls import path

from blog.views import ArticleListView


urlpatterns = [
    path("articles/", ArticleListView.as_view(), name="article-list"),
]

app_name = "blog"
