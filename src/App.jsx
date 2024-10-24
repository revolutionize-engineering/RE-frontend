import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<h1>Home Page</h1>} />
        <Route exact path="/contact" element={<Contact/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
