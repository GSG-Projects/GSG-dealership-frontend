import React from 'react';
import Jumbotron from './components/Jumbotron';
import BrandsCarousel from './components/BrandsCarousel';
import MostRequest from './components/MostRequest';

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <BrandsCarousel />
            <MostRequest />
        </>
    );
}
