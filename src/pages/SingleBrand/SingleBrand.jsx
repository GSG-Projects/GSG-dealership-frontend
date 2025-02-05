import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from 'framer-motion';

import { fetchSingleBrand } from "../../store/API/SingleBrand";
import { fetchModels } from "../../store/API/CarModels";
import { fetchCars } from "../../store/API/Cars";
import backgorund from '../../assets/img/brands-bg.png'

import Loading from "../../components/Loading";
import ModelItem from "../../components/ModelItem";

export default function SingleBrand() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { item: brand, status: brandStatus, error: brandError } = useSelector((state) => state.singleBrand);
    const { items: models, status: modelsStatus, error: modelsError } = useSelector((state) => state.models);
    const { items: cars, status: carsStatus, error: carsError } = useSelector((state) => state.cars);

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleBrand(id));
        }
    }, [dispatch, id]);
    
    useEffect(() => {
        if (id && modelsStatus === 'idle') {
            dispatch(fetchModels(id));
        }
    }, [dispatch, id, modelsStatus]);
    
    useEffect(() => {
        if (id && carsStatus === 'idle') {
            dispatch(fetchCars(id));
        }
    }, [dispatch, id, carsStatus]);
    
    if (brandStatus === 'loading' || modelsStatus === 'loading' || carsStatus === 'loading') {
        return (
             <div className="flex justify-center items-center h-screen bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950">
                <div className="scale-150">
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
            <img 
                src={backgorund} alt="" 
                className="absolute top-0 object-cover w-full"
            />
            <motion.div
                initial={{ scale: 1, y: 0, opacity: 100 }}
                style={{ scale, y, opacity }}
                className="py-10 h-2/3 mx-auto sticky flex items-start justify-center top-0"
            >
                <img src={brand.image} alt={brand.name || "Brand"} className="h-96 object-contain max-w-[700px]"/>
            </motion.div>
            <div className="w-full h-auto grid grid-cols-1 gap-24 border-t relative border-white p-20 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950">
            {models
                .filter((model) => model.brand_id == id)
                .map((model) => {
                    const car = cars.find(car => car.car_model.id === model.id);
                    
                    if (car) {
                        return (
                            <ModelItem 
                                key={model.id}
                                id={model.id}
                                image={model.image}
                                name={model.name}
                                carburante={car.fuel_type}
                                prezzo={car.price}
                            />
                        );
                    }
                    return null;
                })
            }
            </div>
        </div>
    );
}
