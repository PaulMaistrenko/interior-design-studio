from django.contrib import admin

from blog.models import Article, ArticleComponent, ComponentAdvantage, ComponentFeature


admin.site.register(Article)
admin.site.register(ArticleComponent)
admin.site.register(ComponentAdvantage)
admin.site.register(ComponentFeature)
