import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Owners from './pages/Owners';
import About from './pages/About';

import Mustang from './pages/Mustang';
import F150 from './pages/F-150';
import Bronco from './pages/Bronco';
import Explorer from './pages/Explorer';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

import Search from './pages/Search';
import Login from './pages/Login';    // Import the Login component
import SignUp from './pages/SignUp'; // Import the SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <img src="/assets/ford-logo.png" alt="Ford Logo" className="logo" />
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/owners">Owners</Link>
            <Link to="/about">About</Link>
            <Link to="/search">Search</Link>
            <Link to="/login">Login</Link>    {/* Login Link */}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/about" element={<About />} />
          
          {/* Vehicle detail pages */}
          <Route path="/vehicle/Mustang" element={<Mustang />} />
          <Route path="/vehicle/f150" element={<F150 />} />
          <Route path="/vehicle/bronco" element={<Bronco />} />
          <Route path="/vehicle/explorer" element={<Explorer />} />

          {/* Legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />   {/* Login page route */}
          <Route path="/signup" element={<SignUp />} /> {/* SignUp page route */}

          {/* Search Page */}
          <Route path="/search" element={<Search />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2025 Ford Motor Company</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
