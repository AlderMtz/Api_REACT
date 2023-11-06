from django.shortcuts import render #no utilizamos render en esta seccion
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
#aqui creamos y definimos las variables que vamos a utilizar para los respectivos "querry"
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer #clase que crea la informacion en formato "json" que vamos a utilizar
    queryset = Task.objects.all() #objetos que vamos a mostrar en los "querry".