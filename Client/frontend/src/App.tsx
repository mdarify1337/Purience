import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './model/landing/landingpage';
import FourHundredFourError from '../src/Components/Errorpage';
import SignUp from './model/authentication/SignUp';
import Authentication from './model/authentication/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/authentication' element={<Authentication/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="*" element={<FourHundredFourError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
