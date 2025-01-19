import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Layout principale */}
      <Route path="/" element={<Layout />}>
        {/* Pagine all'interno del layout */}
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* Puoi aggiungere altre pagine qui */}
      </Route>
    </Routes>
  );
}

export default App;
