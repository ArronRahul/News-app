import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import News from './Pages/News';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { fetchData } from '../Checker/Checker';
import { useEffect, useState } from 'react';
import { userDetails } from '../api/api';

function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      setAuth(data.data !== null);
      setUser(data.data.email)

    }).catch((error) => {
      console.error('Error fetching user details:', error);
    })
  },[])


  return (
    <BrowserRouter>
      <Navbar auth={auth} />
      <Routes>
        <Route path="/"
        element={auth ? <Home user={user} /> : <Navigate to="/login" />}/>
        <Route path="/news" 
          element={auth ? <News /> : <Navigate to="/login" />} 
        />
        <Route path='/login' element={auth ? <Navigate to="/"/> : <Login setAuth={setAuth} auth={auth}/> }/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
