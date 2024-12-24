from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Subject,Topic
from.Serializers import SubjectSerializer,TopicSerializer

@api_view(['GET'])
def Subjects(request):
   data = Subject.objects.all()
   serializer = SubjectSerializer(data,many=True)
   return Response(serializer.data)

@api_view(['GET'])
def topics(request,tid):
    data = Topic.objects.filter(Sid=tid)
    serializer = TopicSerializer(data,many=True)
    return Response(serializer.data)
    