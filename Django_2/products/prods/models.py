from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, default=True)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    quantity = models.IntegerField()

    def __str__(self):
        return self.name