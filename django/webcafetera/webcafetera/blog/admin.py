from django.contrib import admin
from .models import Post,Categoria

# Register your models here.

class CategoriAdmin(admin.ModelAdmin):
    readonly_fields=('created','updated')
    
class PostAdmin(admin.ModelAdmin):
    readonly_fields=('created','updated')
    list_display=('title','autor')
    search_fields=('title','autor__username')
    
    
admin.site.register(Categoria,CategoriAdmin)
admin.site.register(Post,PostAdmin)