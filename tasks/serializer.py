from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task #desde que modelo importaremos los datos a serializar
        #fields = ('id', 'title', 'description', 'done') #seleccionamos los campos a serializar
        fields = '__all__' #aqui seleecionamos todos los campos que vamos a serializar
         