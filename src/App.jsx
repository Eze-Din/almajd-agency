import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import JobListings from './pages/JobListings';
import GoUpButton from './components/GoUpButton';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopHeader />
        <Navbar />
        <main className="bg-white flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/jobs" element={<JobListings />} />
          </Routes>
        </main>
        <GoUpButton />
        <footer className="bg-black text-white py-4 text-center">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
