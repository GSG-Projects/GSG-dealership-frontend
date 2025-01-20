import { useEffect, useState } from "react";
import './BrandsCarousel.css';

export default function BrandsCarousel() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function getBrands() {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/brands');
            const data = await response.json();
            setBrands(data);
            console.log(data);
        } catch (error) {
            console.error('Errore nel fetch dei dati', error);
        }
    }

    getBrands();
    }, []);

   return(
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden">
        <div className="carousel-track relative h-52 py-7 gap-20 flex animate-scroll">
            {brands.map((brand, index) => (
                <img 
                    className="max-w-60 object-contain mx-4"
                    key={index} 
                    src={brand.image} 
                    alt={brand.name} 
                />
            ))}
            {brands.map((brand, index) => (
                <img 
                    className="max-w-60 object-contain mx-4"
                    key={index + brands.length} 
                    src={brand.image} 
                    alt={brand.name} 
                />
            ))}
        </div>
    </div>
   ); 
}