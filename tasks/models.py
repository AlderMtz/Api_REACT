from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True) #si no ingresan nada lo guarda como "vacio/blank"
    done = models.BooleanField(default=False) #al crearse un modelo ingreas por default "false"

    def __str__(self):
        return self.title #esta funcion retorna el titulo al ser creada. (Esto para verlo en "/admin")