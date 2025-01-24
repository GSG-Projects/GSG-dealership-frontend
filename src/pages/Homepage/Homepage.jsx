import React from 'react';
import Jumbotron from './components/Jumbotron';
import BrandsCarousel from './components/BrandsCarousel';
import Vetrina from './components/Vetrina';
import ScrollParallax from './components/ScrollParallax';
import Info from './components/Info';

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <ScrollParallax />
            <Vetrina />
            <BrandsCarousel />
            <Info />
        </>
    );
}
