import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import About from './pages/About'
import Courses from './pages/Courses'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>        
      <Footer />
    </Router>
  );
};

export default App;
