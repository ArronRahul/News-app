
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import News from './Pages/News';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
