import { useEffect } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { motion, useMotionValue } from "framer-motion";
import { animate } from "motion";
import { fetchBrands } from '../../../store/API/Brands';
import { useDispatch, useSelector } from "react-redux";

export default function BrandsCarousel() {
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -(width / 2) - 128/2;

        controls = animate(xTranslation,[0, finalPosition], {
            ease: 'linear',
            duration: 50,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });
        return controls.stop;
    }, [xTranslation, width]);

    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.brands);
    
    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchBrands());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
            <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden h-52 flex justify-center items-center">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                    Loading...
                </span>
            </div>
        </div>
        );
    }
    if (status === 'failed') return <p>Error: {error}</p>;

   return(
    <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-950 overflow-hidden h-52">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
        <motion.div className="absolute left-0 h-52 py-7 gap-32 flex overflow-visible" ref={ref} style={{x: xTranslation}}>
            {[...items, ...items].map((brand, index) => (
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