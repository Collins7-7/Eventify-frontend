import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Category from './components/Category'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/categories' element={<Category />} exact />
        <Route path= '/signup' element={< Signup />} exact />
        <Route path= '/login' element={<Login />} exact />
      </Routes>
    </Router>
  </>
      
    
  );
}

export default App;
