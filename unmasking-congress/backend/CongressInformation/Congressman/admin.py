from django.contrib import admin
from .models import Congressman


# Register your models here.
class CongressmanAdmin(admin.ModelAdmin):
    list_display = ('name', 'state', 'party', 'twitter_handle')


admin.site.register(Congressman, CongressmanAdmin)
