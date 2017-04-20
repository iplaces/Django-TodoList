# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0002_auto_20170420_0650'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todolist',
            old_name='linenos',
            new_name='completed',
        ),
        migrations.RemoveField(
            model_name='todolist',
            name='code',
        ),
        migrations.RemoveField(
            model_name='todolist',
            name='language',
        ),
        migrations.RemoveField(
            model_name='todolist',
            name='style',
        ),
        migrations.RemoveField(
            model_name='todolist',
            name='title',
        ),
        migrations.AddField(
            model_name='todolist',
            name='text',
            field=models.CharField(default=b'', max_length=300, blank=True),
        ),
    ]
