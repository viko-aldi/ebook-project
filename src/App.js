import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Materi from './pages/Materi';
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar';


const App =() =>{
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/materi' element={<Materi/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App;
