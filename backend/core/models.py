import pathlib
import uuid

from django.db import models
from django.utils.text import slugify


def project_main_image_path(project: "Project", filename: str) -> pathlib.Path:
    filename_suffix = pathlib.Path(filename).suffix
    unique_id = uuid.uuid4()
    slug_name = slugify(project.name)
    new_filename = f"{slug_name}-{unique_id}{filename_suffix}"
    return pathlib.Path("upload/projects/main_image/") / new_filename


def project_image_path(instance: "ProjectImage", filename: str) -> pathlib.Path:
    filename_suffix = pathlib.Path(filename).suffix
    unique_id = uuid.uuid4()
    slug_name = slugify(instance.project.name)
    new_filename = f"{slug_name}-{unique_id}{filename_suffix}"
    return pathlib.Path("upload/projects/gallery_image/") / new_filename


class Tag(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class ProjectStyle(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    style = models.ForeignKey(
        ProjectStyle,
        on_delete=models.CASCADE,
        related_name="projects"
    )
    tags = models.ManyToManyField(
        Tag,
        related_name="projects"
    )
    main_image = models.ImageField(upload_to=project_main_image_path)

    def __str__(self) -> str:
        return self.name


class ProjectImage(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images"
    )
    image = models.ImageField(upload_to=project_image_path)

    def __str__(self) -> str:
        return f"{self.project.name} image"


class Service(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class ProjectConfiguration(models.Model):
    name = models.CharField(max_length=255, unique=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    services = models.ManyToManyField(
        Service,
        related_name="project_configurations"
    )

    def __str__(self) -> str:
        return f"{self.name} ({self.price} UAH)"
