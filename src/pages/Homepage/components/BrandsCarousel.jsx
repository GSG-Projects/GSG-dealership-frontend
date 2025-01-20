import { useEffect, useState } from "react";

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
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 h-52 py-7 flex">
        {brands.map((brand) => (
            <img 
                className="h-full aspect-square mx-4"
                key={brand.id} 
                src={brand.image} 
                alt={brand.name} 
            />
        ))}
    </div>
   ); 
}