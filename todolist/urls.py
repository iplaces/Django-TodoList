from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^todolist/$', views.todo_list),
    url(r'^tododetail/(?P<id>[0-9]+)/$', views.todo_detail),
]