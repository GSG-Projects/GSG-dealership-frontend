import { useEffect } from "react";
import { useMeasure } from "@uidotdev/usehooks";
import { motion, useMotionValue } from "framer-motion";
import { animate } from "motion";
import { fetchBrands } from '../../../store/API/Brands';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../../components/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BrandsCarousel() {
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -(width / 2) - 128/2;

        controls = animate(xTranslation,[0, finalPosition], {
            ease: 'linear',
            duration: 60,
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
            <div className="relative bg-neutral-900 h-44 flex justify-center items-center">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
                <div className="w-9">
                    <Loading />
                </div>
            </div>
        );
    }
    if (status === 'failed') {
        return(
            <>
                <div className="relative bg-neutral-900 overflow-hidden h-44 flex flex-col justify-center items-center gap-2 text-neutral-50 uppercase font-kanit">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
                    <FontAwesomeIcon
                        // icon={}
                    />
                    <p className="text-4xl font-bold">
                        ERROR 401
                    </p>
                    <p className="text-xl">
                        {error}
                    </p>
                </div>
            </>
        );
    };

   return(
    <div className="relative bg-neutral-900 overflow-hidden h-44">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/65 via-transparent to-black/65 z-10"></div>
        <motion.div className="absolute left-0 h-full py-7 gap-32 flex overflow-visible" ref={ref} style={{x: xTranslation}}>
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
   )
}