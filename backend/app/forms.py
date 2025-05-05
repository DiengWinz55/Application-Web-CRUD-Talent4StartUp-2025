from django import forms 
from .models import Employe

class Employeform(forms.ModelForm):

    class Meta:
        model = Employe
        fields = ['nom','email','adresse','phone', 'poste']