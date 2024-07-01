from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'read', 'responded', 'created_at')
    list_filter = ('read', 'responded', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')


admin.site.register(Contact, ContactAdmin)
