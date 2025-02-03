import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage/Homepage';
import Brands from './pages/Brands/Brands';
import Auto from './pages/Auto/Auto';
import './App.css';
import SingleBrand from './pages/SingleBrand/SingleBrand';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/marchi"  element={<Brands />} />
        <Route path="/marchi/:id" element={<SingleBrand />} />
        <Route path="/auto" element={<Auto />} />
      </Route>
    </Routes>
  );
}