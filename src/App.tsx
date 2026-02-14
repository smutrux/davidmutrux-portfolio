import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Department from './pages/Department';
import About from './pages/About';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-dark text-accent selection:bg-accent selection:text-dark">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sound" element={<Department type="sound" />} />
          <Route path="/production" element={<Department type="production" />} />
          <Route path="/camera" element={<Department type="camera" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;