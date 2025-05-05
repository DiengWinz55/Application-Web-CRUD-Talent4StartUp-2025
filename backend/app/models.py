from django.db import models



# class des employés

class Employe(models.Model):

    nom = models.CharField(max_length=100)
    email = models.EmailField()
    adresse= models.TextField() 
    phone = models.IntegerField()
    poste = models.TextField() 

    def __str__(self):
        return self.nom