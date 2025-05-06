import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

function EmployeeForm() {
  const [form, setForm] = useState({ nom: '', prenom: '', fonction: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('employees/', form).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>
      <input name="nom" placeholder="Nom" onChange={handleChange} required />
      <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
      <input name="fonction" placeholder="Fonction" onChange={handleChange} required />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default EmployeeForm;
