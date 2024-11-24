import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { url } from 'inspector';

function App() {
  return (
    <div className="text-red-500 font-poppins">
     <div className="border-2 h-[80vh] border-blue-600 bg-cover bg-center " style={{backgroundImage: "url('/landing-img.png')"}}>
      
        <Navbar/>
        {/* <img src="/landing-img.png" alt="" /> */}

      </div>
    </div>
  );
}

export default App;
