# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0004_auto_20170420_0712'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='todolist',
            options={'ordering': ('create',)},
        ),
        migrations.RenameField(
            model_name='todolist',
            old_name='created',
            new_name='create',
        ),
        migrations.AlterField(
            model_name='todolist',
            name='text',
            field=models.CharField(default=b'', max_length=300),
        ),
    ]
