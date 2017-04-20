# coding:utf-8
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import Todolist
from .serializers import TodolistSerializer


# Create your views here.
def index(request):
    return render(request, 'todolist/index.html', {'title': 'Todo List'})


@csrf_exempt
def todo_list(request):
    '''
    展示所有的todos，或者创建新的todo
    '''
    if request.method == 'GET':
        todos = Todolist.objects.all()
        serializer = TodolistSerializer(todos, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TodolistSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def todo_detail(request, id):
    '''
    删除对应todo
    '''
    try:
        todo = Todolist.objects.get(id=id)
    except Todolist.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'DELETE':
        todo.delete()
        return HttpResponse(status=204)

    elif request.method == 'GET':
        todo.completed = not todo.completed
        todo.save()
        return HttpResponse(status=204)
