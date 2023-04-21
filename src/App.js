// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Materi from './pages/Materi';
import React from 'react';
import Home from './pages/Home';


const App =() =>{
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/materi' element={<Materi/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App;
