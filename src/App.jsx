import React from 'react'
import "rabbitcss";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='overflow-hidden bg-blue-top-grad'>
      <div className=" pt-5 ">
        <Navbar />
        <Hero />


        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default App
