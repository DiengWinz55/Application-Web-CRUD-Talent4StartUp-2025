import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function EmployeeDetail() {
  const { id } = useParams();
  const [form, setForm] = useState({ nom: '', prenom: '', fonction: '' });
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`employees/${id}/`).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`employees/${id}/`, form).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier un employé</h2>
      <input name="nom" value={form.nom} onChange={handleChange} required />
      <input name="prenom" value={form.prenom} onChange={handleChange} required />
      <input name="fonction" value={form.fonction} onChange={handleChange} required />
      <button type="submit">Mettre à jour</button>
    </form>
  );
}

export default EmployeeDetail;
