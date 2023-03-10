import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Contact from './components/Contact';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home'
import Footer from './components/Footer';
import Events from './components/Events/Events';
import BookingForm from './components/BookingForm/BookingForm'
import AdminApp from './components/Admin/AdminApp';
import SpecificCategory from './components/SpecificCategory';

import Service from './components/Service';

import LogNav from './components/LogNav';
import HeroSection from './components/HeroSection';
function App() {

const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }
  
const [role, setRole] = useState("");
const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    fetch("/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data.user.role);
        setLoggedInUserId(data.user.id);
      });
  }, [storedToken]);

  

 return (
  <div>
    {storedToken ? (
      <Router>
        {role === "admin"? <AdminApp setStoredToken={setStoredToken}/> :
        <Navbar setStoredToken={setStoredToken} />
        }
        <Routes>
          <Route
            path="/" element={<Home setStoredToken={setStoredToken} />}
      />
          <Route path='/categories' element={<Category setStoredToken={setStoredToken}/>} exact/>
          <Route path= '/service' element={<Service setStoredToken={setStoredToken}/>} exact />
          <Route path= '/contact' element={<Contact setStoredToken={setStoredToken}/>} exact />
          <Route path= '/event/:id' element={<Events setStoredToken={setStoredToken}/>} exact />
          {/* <Route path='/bookingform' element={<BookingForm setStoredToken={setStoredToken}/>} exact/> */}
        </Routes>
        {/* <Events/> */}
        <Footer />
      </Router>
    ) : (
      <div>
      <Router>
      {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}  setStoredToken={setStoredToken}/>: <Signup onFormSwitch={toggleForm} setStoredToken={setStoredToken}/>
      } */}
      <LogNav/>
      <Routes>
        <Route path="/login" element={<Login setStoredToken={setStoredToken}/>} exact/>
        <Route path="/signup" element={<Signup setStoredToken={setStoredToken}/>} exact/>
      </Routes>
      {/* <HeroSection/> */}
      </Router>
      </div>
    )}
  </div>
);
}


export default App;
