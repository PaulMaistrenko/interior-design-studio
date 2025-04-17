import pathlib
import uuid

from django.db import models
from django.utils.text import slugify


def post_image_path(article: "Article", filename: str) -> pathlib.Path:
    filename_suffix = pathlib.Path(filename).suffix
    unique_id = uuid.uuid4()
    slug_name = slugify(article.title)
    new_file_name = f"{slug_name}-{unique_id}{filename_suffix}"
    return pathlib.Path("upload/articles/") / new_file_name


class Article(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to=post_image_path)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self) -> str:
        return self.title
