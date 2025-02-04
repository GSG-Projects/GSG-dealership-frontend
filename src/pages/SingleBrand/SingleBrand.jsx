import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from 'framer-motion';

import { fetchSingleBrand } from "../../store/API/SingleBrand";
import { fetchModels } from "../../store/API/CarModels";
import { fetchCars } from "../../store/API/Cars";

import Loading from "../../components/Loading";

export default function SingleBrand() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { item: brand, status: brandStatus, error: brandError } = useSelector((state) => state.singleBrand);
    const { items: models, status: modelsStatus, error: modelsError } = useSelector((state) => state.models);
    const { items: cars, status: carsStatus, error: carsError } = useSelector((state) => state.cars);

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);


    useEffect(() => {
        if (id) {
            dispatch(fetchSingleBrand(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (id && modelsStatus === 'idle') {
            dispatch(fetchModels(id));
        }
        if (id && carsStatus === 'idle') {
            dispatch(fetchCars(id));
        }
    }, [dispatch, id, modelsStatus, carsStatus]);

    if (brandStatus === 'loading' || modelsStatus === 'loading' || carsStatus === 'loading') {
        return (
            <div className="h-full relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">
                <div className="scale-150 flex justify-center items-center h-64">
                    <Loading />
                </div>
            </div>
        );
    }

    if (brandStatus === 'failed') {
        return <p>Error loading brand: {brandError}</p>;
    }

    if (modelsStatus === 'failed') {
        return <p>Error loading models: {modelsError}</p>;
    }

    if (carsStatus === 'failed') {
        return <p>Error loading cars: {carsError}</p>;
    }

    return (
        <div className="w-full bg-gradient-to-b min-h-screen relative from-neutral-950 to-neutral-900">
            <motion.div
                initial={{ scale: 1, y: 0 }}
                style={{ scale, y }}
                className="py-10 h-auto mx-auto sticky flex items-start justify-center top-0"
            >
                <img src={brand.image} alt={brand.name || "Brand"} className="h-96 object-contain max-w-[800px]"/>
            </motion.div>
        </div>
    );
}
