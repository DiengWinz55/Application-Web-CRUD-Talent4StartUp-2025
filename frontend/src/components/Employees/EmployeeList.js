import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('employees/').then(res => setEmployees(res.data));
  }, []);

  const deleteEmployee = (id) => {
    api.delete(`employees/${id}/`).then(() => {
      setEmployees(employees.filter(emp => emp.id !== id));
    });
  };

  return (
    <div>
      <h2>Liste des employés</h2>
      <Link to="/employees/add">Ajouter un employé</Link>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            <Link to={`/employees/${emp.id}`}>{emp.nom}</Link>
            <button onClick={() => deleteEmployee(emp.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
