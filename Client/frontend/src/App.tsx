import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { url } from 'inspector';
import CallToAction from './Components/CallToAction';
import PopularTours from './Components/PopularTours';

function App() {
  return (
    <main className=" text-white">
     <section className="border-2 h-[100vh] lg:h-[70vh] border-blue-600 bg-cover bg-center"  style={{backgroundImage: "url('/landing-img.png')"}}>
        <Navbar/>
        <CallToAction/>
        <PopularTours/>
      </section>
    </main>
  );
}

export default App;
