import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import News from './Pages/News';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuth(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Navbar auth={auth} />
      <Routes>
        <Route path="/"
        element={auth ? <Home /> : <Navigate to="/login" />}/>
        <Route path="/news" 
          element={auth ? <News /> : <Navigate to="/login" />} 
        />
        <Route path='/login' element={<Login setAuth={setAuth} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
