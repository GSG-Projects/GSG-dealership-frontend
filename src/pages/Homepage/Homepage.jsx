import React from 'react';
import Jumbotron from './components/Jumbotron';
import BrandsCarousel from './components/BrandsCarousel';
import MostRequest from './components/MostRequest';
import ScrollParallax from './components/ScrollParallax';

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <BrandsCarousel />
            <ScrollParallax />
            <MostRequest />
        </>
    );
}
