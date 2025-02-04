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

    console.log(models.brand_id);

    return (
            <div className="w-full bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950 min-h-screen relative">
            <motion.div
                initial={{ scale: 1, y: 0 }}
                style={{ scale, y }}
                className="py-10 h-2/3 mx-auto sticky flex items-start justify-center top-0"
            >
                <img src={brand.image} alt={brand.name || "Brand"} className="h-96 object-contain max-w-[800px]"/>
            </motion.div>
            <div className="w-full h-auto grid grid-cols-3 gap-24 border-t relative border-white p-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
                {
                    models.map((model) => (
                        model.brand_id == id &&
                        <>
                            <div className="w-full text-white border h-48 relative border-white shadow-lg overflow-hidden transition-all ease-in-out duration-300 hover:h-72">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={model.image} 
                                    alt={model.name} 
                                />
                                <div 
                                    className="text-xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-900 py-8 outline-1 outline-white absolute bottom-0 right-0 z-10 text-center transition-all ease-in-out duration-200 w-auto px-16 h-11 flex justify-center items-center"
                                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                                >
                                    {model.name}
                                </div>
                            </div>
                        </>
                    ))          
                }
            </div>
        </div>
    );
}
