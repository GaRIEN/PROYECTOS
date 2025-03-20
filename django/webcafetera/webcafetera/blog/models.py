from django.db import models
from django.utils.timezone import now
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Categoria(models.Model):
    name=models.CharField(max_length=100,verbose_name='nombre')
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name='categoria'
        verbose_name_plural='categorias'
        ordering=['-created']
        
    def __str__(self):
        return self.name
    
    
class Post(models.Model):
    title=models.CharField(max_length=200, verbose_name='titulo')
    content=models.TextField(verbose_name='contenido')
    publicado = models.DateTimeField(verbose_name='fecha de publicacion', default=now)
    image=models.ImageField(upload_to='blog', verbose_name='imagen',null=True, blank=True)
    autor=models.ForeignKey(User,verbose_name='Autor', on_delete=models.CASCADE)
    #para esto agregamos related
    categoria=models.ManyToManyField(Categoria,verbose_name='categoria',related_name='get_posts')
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now=True)
    
    
    class Meta:
        verbose_name='post'
        verbose_name_plural='posts'
        ordering=['-created']
        
    def __str__(self):
        return self.title
    