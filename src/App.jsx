import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage/Homepage';
import Brands from './pages/Brands/Brands';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/marchi" element={<Brands />} />
      </Route>
    </Routes>
  );
}

export default App;
