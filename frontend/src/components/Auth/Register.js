import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('register/', form);
      navigate('/login');
    } catch (err) {
      alert('Erreur lors de l’inscription');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} required />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Register;
