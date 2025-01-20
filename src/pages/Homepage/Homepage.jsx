import React from 'react';
import './Homepage.css';
import Jumbotron from './components/Jumbotron';
import BrandsCarousel from './components/BrandsCarousel';

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <BrandsCarousel />
        </>
    );
}
