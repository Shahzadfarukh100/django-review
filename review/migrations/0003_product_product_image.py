# Generated by Django 2.1.3 on 2019-01-17 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0002_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_image',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
