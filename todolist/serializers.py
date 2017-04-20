from rest_framework import serializers
from .models import Todolist


class TodolistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todolist
        fields = ("id", 'text', 'completed', 'create')
