import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EmployeeList from './components/Employees/EmployeeList';
import EmployeeForm from './components/Employees/EmployeeForm';
import EmployeeDetail from './components/Employees/EmployeeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees/add" element={<EmployeeForm />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
