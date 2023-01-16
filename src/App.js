import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Contact from './components/Contact';
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import EventBookingForm from './components/BookingForm/BookingForm';
// import BookingForm from './components/BookingForm/BookingForm'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/categories' element={<Category />} exact />
        <Route path= '/contact' element={<Contact />} exact />
        <Route path= '/signup' element={< Signup />} exact />
        <Route path= '/login' element={<Login />} exact />
        {/* <Route path='/booking' element={<BookingForm/>} exact /> */}
      </Routes>
      <EventBookingForm/>
    </Router>
  </>
      
    
  );
}

export default App;
