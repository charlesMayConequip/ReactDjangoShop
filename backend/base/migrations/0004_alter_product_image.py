# Generated by Django 4.0.2 on 2022-03-01 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/640x360.png', null=True, upload_to=''),
        ),
    ]