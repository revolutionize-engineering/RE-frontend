import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Events from "./Events/event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
