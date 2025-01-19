import React, { useState, useEffect } from 'react';
import img1 from '../../../assets/jumbotron cars/img1.jpg';
import img2 from '../../../assets/jumbotron cars/img2.jpg';
import img3 from '../../../assets/jumbotron cars/img3.jpg';
import img4 from '../../../assets/jumbotron cars/img4.jpg';

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
    {
        title: 'img4',
        link: img4
    },
];

export default function Jumbotron () {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setNextImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
                setFade(true);
            }, 4000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full min-h-screen overflow-hidden relative'>
            {/* Overlay */}
            <div className='bg-gradient-to-r from-black z-10 via-transparent to-transparent w-full h-full absolute top-0 left-0'></div>

            {/* Images */}
            <img 
                className={'absolute top-0 right-0 w-full h-full object-cover'}
                src={IMAGES[nextImageIndex].link} 
                alt={IMAGES[nextImageIndex].title}
            />
            <img 
                className={`absolute top-0 right-0 w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                src={IMAGES[currentImageIndex].link} 
                alt={IMAGES[currentImageIndex].title}
            />
            {/* Text */}
            <div className='z-20 absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white scale-110'> 
                <h1 className='text-5xl font-oswald'>
                    Le nostre Auto
                </h1>
                <p className='text-md mt-12'>
                    Scopri le nostre auto in vendita e trova quella giusta per te.
                </p>
                <button className='border border-white/30 bg-transparent mt-5 py-2 px-6 hover:bg-white/10 transition-all ease-in-out duration-300'>
                    Scopri di più
                </button>
            </div>
        </div>
    );
}