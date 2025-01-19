import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/jumbotron cars/AlfaRomeo-Giulia.jpg';
import img2 from '../../../assets/jumbotron cars/BMW-Serie7.jpg';
import img3 from '../../../assets/jumbotron cars/Mercedes-ClasseA-Berlina.avif';

const IMAGES = [
    {
        title: 'img1',
        link: img1
    },
    {
        title: 'img2',
        link: img2
    },
    {
        title: 'img3',
        link: img3
    },
];

export default function Jumbotron () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
                setFade(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full max-h-screen overflow-hidden flex justify-center items-center bg-black'>
            <img 
                className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                src={IMAGES[currentImageIndex].link} 
                alt={IMAGES[currentImageIndex].title}
            />
        </div>
    );
}