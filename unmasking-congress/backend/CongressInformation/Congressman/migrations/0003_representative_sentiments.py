# Generated by Django 3.1.4 on 2021-01-03 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Congressman', '0002_auto_20210102_1900'),
    ]

    operations = [
        migrations.AddField(
            model_name='representative',
            name='sentiments',
            field=models.TextField(default=''),
        ),
    ]