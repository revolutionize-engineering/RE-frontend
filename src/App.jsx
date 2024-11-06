import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Events from "./Events/event";
import Products from "./Products/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
