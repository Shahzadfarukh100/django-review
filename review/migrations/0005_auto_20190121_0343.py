# Generated by Django 2.1.3 on 2019-01-21 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0004_product_product_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_description',
            field=models.TextField(blank=True, null=True),
        ),
    ]