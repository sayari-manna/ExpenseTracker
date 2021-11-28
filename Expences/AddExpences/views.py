from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ExpencesSerializer
from .models import Expences
import pandas as pd


# Create your views here.
class expences_views():

    @api_view(['POST'])
    def add_record(requests):
        print(requests.data)
        months = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        payload = requests.data
        year, month, date = [int(i) for i in payload["date"][:10].split('-')]
        payload["date"] = '{} {}'.format(date, months[month-1])
        payload["year"] = str(year)
        serializer = ExpencesSerializer(data=requests.data)
        if serializer.is_valid():
            serializer.save()
        expence = Expences.objects.all()
        serializer = ExpencesSerializer(expence, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    def show_record(resuests):
        expence = Expences.objects.all()
        serializer = ExpencesSerializer(expence, many=True)
        return Response(serializer.data)