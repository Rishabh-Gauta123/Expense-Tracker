import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Expense from './pages/Dashboard/Expense';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Root/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
    <Route path="/expense" element={<Expense/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/income" element={<Income/>}/>

  </Routes>
</Router>
    </>
  )
}

const Root=()=>{
  const isAuthenticate=!!localStorage.getItem('token');
  return isAuthenticate?(
    <Navigate to='dashboard'/>
  ):(
    <Navigate to='login'/>
  );
}


export default App
