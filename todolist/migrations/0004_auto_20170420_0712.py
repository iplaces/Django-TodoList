# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0003_auto_20170420_0701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='id',
            field=models.AutoField(serialize=False, primary_key=True),
        ),
    ]
