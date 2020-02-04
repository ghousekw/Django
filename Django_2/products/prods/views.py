from django.shortcuts import render, redirect
from .models import Product
from .forms import ProductForm

# Create your views here.

# Listing all products
def list_products(request):
    products = Product.objects.all()
    # context name 'products' will be used in html
    return render(request, 'products.html', {'products': products})

# Creating a product
def create_products(request):
    form = ProductForm(request.POST or None)

    # If form is valid, save and redirect to listing page
    if(form.is_valid()):
        form.save()
        return redirect('list_products')
    
    return render(request, 'products-form.html', {'form':form})

# Updating a product
def update_products(request, id):
    product = Product.objects.get(id=id)
    form = ProductForm(request.POST or None, instance=product)

    # If form is valid, save and redirect to listing page
    if(form.is_valid()):
        form.save()
        return redirect('list_products')
    
    return render(request, 'products-form.html', {'form':form, 'product': product})

# Deleting a product
def delete_products(request, id):
    product = Product.objects.get(id=id)

    # if request method is POST, delete the product and redirect to listing page
    if request.method == 'POST':
        product.delete()
        return redirect('list_products')
    
    return render(request, 'products-del.html', {'product': product})