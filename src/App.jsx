import './App.css';
import Home from './components/Home';
import Stream from './components/Stream';
import Login from './components/Login';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const navigate = useNavigate();


  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  }, [])

  return (
    <div>
       <ToastContainer theme='dark' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Stream />} />
      </Routes>
    </div>
  )
}

function AppWrapper(){
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper;