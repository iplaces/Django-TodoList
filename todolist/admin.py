from django.contrib import admin
from .models import Todolist


# Register your models here.
class TodolistAdmin(admin.ModelAdmin):
    fields = ['id', 'text', 'completed', 'create']

admin.site.register(Todolist, TodolistAdmin)
