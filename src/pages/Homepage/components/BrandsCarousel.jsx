import { useEffect, useState } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { motion, useMotionValue } from "framer-motion";
import { animate } from "motion";

export default function BrandsCarousel() {
    let [ref, { width }] = useMeasure();
    const [brands, setBrands] = useState([]);

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -(width / 2) - 128/2;

        controls = animate(xTranslation,[0, finalPosition], {
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });
        return controls.stop;
    }, [xTranslation, width]);

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
    <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden h-52">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
        <motion.div className="absolute left-0 h-52 py-7 gap-32 flex overflow-visible " ref={ref} style={{x: xTranslation}}>
            {[...brands, ...brands].map((brand, index) => (
                <img 
                    className="max-w-60 object-contain mx-4"
                    key={index} 
                    src={brand.image} 
                    alt={brand.name} 
                />
            ))}
        </motion.div>
    </div>
   ); 
}