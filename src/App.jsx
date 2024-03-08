import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';
import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';


const App = () => {
  const { progress } = useProgress();
  const [modelLoad, setModelLoad] = useState(0);

  useEffect(() => {
    setModelLoad(progress);
  }, [progress]);

  return (
    <main className="bg-slate-300/20 h-full  ">
      <Router>
        <Navbar modelLoad={modelLoad} />
        <Routes>
          <Route path="/" element={<Home modelLoad={modelLoad} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
