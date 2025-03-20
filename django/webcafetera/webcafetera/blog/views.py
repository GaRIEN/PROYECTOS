from django.shortcuts import render,get_object_or_404
from .models import Post,Categoria

# Create your views here.

def blog(request):
    post=Post.objects.all()
    return render(request,'blog/blog.html',{'curPost':post})

def categoria(request,categoria_id):
    categoria=get_object_or_404(Categoria,id=categoria_id)
    return render(request,'blog/categoria.html',{'curCategoria':categoria})