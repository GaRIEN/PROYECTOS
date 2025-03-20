from django.contrib import admin
from .models import Service

# Register your models here.

class serviciosAdmin(admin.ModelAdmin):
    readonly_fields=('created','update')

admin.site.register(Service,serviciosAdmin)