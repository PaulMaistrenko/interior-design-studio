from django.contrib import admin

from core.models import (
    Tag,
    Project,
    ProjectStyle,
    ProjectImage,
    Service,
    ProjectConfiguration,
    Consultation,
)


admin.site.register(Tag)
admin.site.register(Project)
admin.site.register(ProjectStyle)
admin.site.register(ProjectImage)
admin.site.register(Service)
admin.site.register(ProjectConfiguration)
admin.site.register(Consultation)
