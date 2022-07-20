import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Music from './pages/Music';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex-wrapper">
        <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
