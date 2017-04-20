from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Todolist
from .serializers import TodolistSerializer


# Create your views here.
def index(request):
    return render(request, 'todolist/index.html', {'title': 'Todo List'})


class JSONResponse(HttpResponse):
    '''
    用来返回JSON数据
    '''
    def __init__(self, data, **kwargs):
        content = JSONRenderer.render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def todo_list(request):
    '''
    展示所有的todos，或者创建新的todo
    '''
    if request.method == 'GET':
        todos = Todolist.objects.all()
        serializer = TodolistSerializer(todos, many=True)
        return JSONResponse(serializer.data)

    elif request.method == 'POST':
        todo = JSONParser().parse(request)
        serializer = TodolistSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONParser(serializer.data, status=201)
        return JSONParser(serializer.errors, status=400)