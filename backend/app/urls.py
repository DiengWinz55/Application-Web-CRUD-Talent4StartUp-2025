from django.urls import path
from .views import Employelist,EmployeAjout,EmployeEdit,EmployeDelete,EmployeeDeleteMultipleView

urlpatterns = [
    path('',Employelist.as_view(),name='employe-list'),
    path('ajout/',EmployeAjout.as_view(), name='employe-ajout'),
    path('edit/<int:pk>/',EmployeEdit.as_view(),name='employe-edit'),
    path('delete/<int:pk>/',EmployeDelete.as_view(),name='employe-delete'),
    path('deleteMultiple/', EmployeeDeleteMultipleView.as_view(), name='employe-delete-multiple'),
]
