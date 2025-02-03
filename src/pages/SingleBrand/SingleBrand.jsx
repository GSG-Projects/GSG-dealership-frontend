import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBrand } from "../../store/API/SingleBrand";
import { useParams } from "react-router-dom";
import { motion, useViewportScroll, useTransform, useMotionValue } from 'framer-motion';

export default function SingleBrand () {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { item, status, error } = useSelector((state) => state.singleBrand);
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const y = useMotionValue(0);

     useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchSingleBrand(id));
        }
    }, [dispatch, status, id]);

    if (status === 'loading') {
        return (
            <div className="py-36 bg-gradient-to-b from-neutral-950 to-neutral-900">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="py-36 bg-gradient-to-b from-neutral-950 to-neutral-900">
                <p className="text-center">Error: {error}</p>
            </div>
        );
    }
    
    return(
        <>
            <div className="py-36 h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
                <motion.div style={{ scale, y }}>
                    <img src={item.image} alt={item.name || "Brand"} className="mx-auto" />
                </motion.div>
            </div>
        </>
    );
}