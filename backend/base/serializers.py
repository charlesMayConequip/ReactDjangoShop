import imp
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

# Wraps around the product model to return in json format
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'