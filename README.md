# Application-Web-CRUD-Talent4StartUp-2025

Ce projet est une application web complète de gestion des employés, développée dans le cadre du programme **Talent4Startups - Full Stack Developer** proposé par **EDACY**.  
Elle permet la gestion complète des employés via des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) ainsi qu’un système d’authentification des utilisateurs.

## 🚀 Fonctionnalités principales

- Inscription et authentification sécurisées des utilisateurs
- Tableau de bord listant les employés
- Ajout d’un nouvel employé
- Modification des informations d’un employé
- Suppression d’un employé
- Interface utilisateur moderne et responsive avec React

---

## 🛠️ Technologies utilisées

### Backend

- **Django** (framework principal)
- **Django REST Framework** (API REST)
- **SQLite** (ou PostgreSQL pour la production)
- **JWT** pour l’authentification

### Frontend

- **React** (création de composants dynamiques)
- **Axios** (requêtes HTTP)
- **React Router** (navigation SPA)
- **HTML, CSS, JavaScript**

---

## ⚙️ Installation et démarrage

### 🔧 Prérequis

- Python 3.9+ & Django
- Node.js et npm
- Git

---
### 1. Clone le projet
```bash
git clone https://github.com/DiengWinz55/Application-Web-CRUD-Talent4StartUp-2025.git
cd Application-Web-CRUD-Talent4StartUp-2025
```
### 2. Lancer le backend (Django)
```bash
cd backend
```
#### Creation d'environnement virtuelle
```bash
python -m venv env
```
#### Activation de l'environnement virtuelle
```bash
source env/bin/activate   # Sur Windows : env\Scripts\activate
```
#### Installation dependances
```bash
pip install -r requirements.txt
```
#### Migration et lancement
```bash
python manage.py migrate  # Migration
python manage.py runserver  # Lancement local
```
### 3. Lancer le frontend (React)
```bash
cd frontend
npm install
npm start
```
### Authentification
- Utilisation de JWT (JSON Web Tokens)
- L'utilisateur doit s'inscrire ou se connecter pour accéder aux fonctionnalités de gestion des employés

### Captures d'écran

### Démo Vidéo

### Auteur
- Projet réalisé par Thierno Bocar DIENG
- Contact : tdieng591@gmail.com
- LinkedIn: https://www.linkedin.com/in/thiernobocardieng/ <br>  <br>  <br>
Dans le cadre de EDACY - Talent4Startups 2025



