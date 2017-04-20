# coding:utf-8
from django.db import models


class Todolist(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=300, blank=False, default='')
    completed = models.BooleanField(default=False)
    create = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-create',)  # 按照创建时间反向排序
