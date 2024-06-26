# Generated by Django 4.2.13 on 2024-06-29 12:03

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('skill', '0002_technicalskill_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='generalskill',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='generalskill',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='technicalskill',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='technicalskill',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
