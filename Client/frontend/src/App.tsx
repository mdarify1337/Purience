import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { url } from 'inspector';
import CallToAction from './Components/CallToAction';
import PopularTours from './Components/PopularTours';
import HowToUse from './Components/HowToUse';
import Features from './Components/Features/Features';
import Trending from './Components/Trending/Trending';
import CustomersReviews from './Components/CustomersReviews.tsx/CustomersReviews';

function App() {
  return (
    <main className=" text-white">
     <section className="h-[100vh] lg:h-[70vh]  bg-cover bg-center"  style={{backgroundImage:"url('/images/landing-img.png')"}}>
        <Navbar/>
        <CallToAction/>
        <PopularTours/>
        <HowToUse/>
        <Features/>
        <Trending/>
        <CustomersReviews/>
      </section>
    </main>
  );
}

export default App;
