from django.shortcuts import render
from .models import Employe
from .forms import Employeform
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView,DeleteView





# class pour afficher les employes

class Employelist(ListView):

    model = Employe
    template_name = 'index.html'
    context_object_name = 'employes'
    paginate_by = 2

 
#  class pour l'ajout 

class EmployeAjout(CreateView):

    model = Employe
    form_class = Employeform
    template_name = 'index.html'
    success_url = reverse_lazy('employe-list')

# class pour la modofication

class EmployeEdit(UpdateView):

    model = Employe
    form_class = Employeform
    template_name = 'index.html'
    success_url = reverse_lazy('employe-list')
    
# class pour supprimer un employe

class EmployeDelete(DeleteView):

    model = Employe
    template_name = 'index.html'
    success_url = reverse_lazy('employe-list')


from django.views import View  
from django.urls import reverse
from django.shortcuts import redirect

class EmployeeDeleteMultipleView(View):
    def post(self, request, *args, **kwargs):
        employee_ids = request.POST.get('employee_ids', '').split(',')
        if employee_ids:
            Employe.objects.filter(id__in=employee_ids).delete()
        return redirect(reverse('employe-list'))
