from django.contrib import admin
from .models import Task # importamos al modelo "Task"
# Register your models here.

admin.site.register(Task)  #agregamos el modelo que queremos visualziar en "/admin"