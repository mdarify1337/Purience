import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './model/landing/landingpage';
import FourHundredFourError from './model/Components/Errorpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="*" element={<FourHundredFourError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
