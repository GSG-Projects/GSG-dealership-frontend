import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchModels } from "../../../store/API/CarModels";
import { fetchBrands } from "../../../store/API/Brands";
import { fetchCars } from "../../../store/API/Cars";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MostRequest.css';

import ButtonModels from "./MostRequest/ButtonModels";
import ModelName from "./MostRequest/ModelName";
import Loading from "../../../components/Loading";
import ModelInfo from "./MostRequest/ModelInfo";

export default function MostRequest() {
    const dispatch = useDispatch();
    const { items: models, status: modelsStatus, error: modelsError } = useSelector((state) => state.models);
    const { items: brands, status: brandsStatus, error: brandsError } = useSelector((state) => state.brands);
    const { items: cars, status: carsStatus, error: carsError } = useSelector((state) => state.cars);

    const [currentBrand, setCurrentBrand] = useState(null);
    const [currentCar, setCurrentCar] = useState(null);
    const [buttonClickStates, setButtonClickStates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);


    useEffect(() => {
        if (modelsStatus === 'idle') {
            dispatch(fetchModels());
        }
        if (brandsStatus === 'idle') {
            dispatch(fetchBrands());
        }
        if (carsStatus === 'idle') {
            dispatch(fetchCars());
        }
    }, [dispatch, modelsStatus, brandsStatus, carsStatus]);

    useEffect(() => {
        if (models.length > 0) {
            const mostRequested = models.filter((model) => model.most_request === 1);
            setFilteredModels(mostRequested);
            setButtonClickStates(new Array(mostRequested.length).fill(false));
        }
    }, [models]);

    useEffect(() => {
        setTimeout(() => {
            if (filteredModels.length > 0 && brands.length > 0) {
                const currentModel = filteredModels[currentIndex];
                const brand = brands.find((b) => b.id === currentModel.brand_id);
                setCurrentBrand(brand);
            }
        }, 200)
    }, [currentIndex, filteredModels, brands]);

    useEffect(() => {
        setTimeout(() => {
            if (filteredModels.length > 0 && cars.length > 0) {
                const currentModel = filteredModels[currentIndex];
                console.log(currentModel);
                const car = cars.find((b) => b.id === currentModel.id);
                setCurrentCar(car);
            }
        }, 200)
    }, [currentIndex, filteredModels, cars]);

    const handleHover = (index) => {
        setCurrentIndex(index);
    };

    console.log(cars);


    const handleButtonClick = (index) => {
        setButtonClickStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const handleMouseLeave = (index) => {
        setButtonClickStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };

    if (modelsStatus === 'loading' || brandsStatus === 'loading' || carsStatus === 'loading') {
        return <Loading />;
    }

    if (modelsStatus === 'failed') {
        return <p>Error loading models: {modelsError}</p>;
    }

    if (brandsStatus === 'failed') {
        return <p>Error loading brands: {brandsError}</p>;
    }

    if (carsStatus === 'failed') {
        return <p>Error loading cars: {carsError}</p>;
    }

    return (
        <div className="h-screen">
            <div className="font-bold font-oswald text-5xl bg-neutral-950 text-white/80 h-1/6 uppercase flex justify-center items-center">
                Modelli più richiesti
            </div>
            <div className="h-full relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">

                {/* Container Image */}
                <div className="absolute left-0 top-0 flex h-full w-full">
                    {filteredModels.map((model, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`transition-all relative h-full flex ease-in-out duration-500 overflow-hidden shadow-inner 
                                ${index === currentIndex ? "blur-none opacity-100 w-full" : "opacity-30 blur-sm w-4/12"}`
                            }
                            style={{
                                clipPath: `${index === currentIndex ? 'polygon(13% 0, 100% 0, 87% 100%, 0 100%)' : 'polygon(40% 0, 100% 0, 60% 100%, 0 100%)'}`,
                            }}
                        >
                            {/* Button */}
                            <ButtonModels
                                handleButtonClick={handleButtonClick}
                                key={index}
                                currentIndex={currentIndex}
                                index={index}
                                buttonClickStates={buttonClickStates}
                            >
                                <FontAwesomeIcon
                                    className={`${buttonClickStates[index] ? '-rotate-90 text-black' : 'text-neutral-300'} transition-transform duration-300`}
                                    icon={faChevronRight}
                                />
                            </ButtonModels>

                            {/* Infos */}
                            <div
                                className={`absolute top-0 left-0 z-10 transition-all ease-in-out duration-300 ${
                                    buttonClickStates[index] ? 'w-1/2 h-full bg-black/65' : 'w-0 opacity-0 h-full bg-black/50'
                                }`}
                                style={{
                                    clipPath: 'polygon(0% 0, 100% 0, 74% 100%, 0 100%)',
                                }}
                            >
                                <div className="m-auto w-full mt-40 text-white font-oswald uppercase">
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[140px]'}
                                    >
                                        Brand
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[120px]'}
                                        carInfo={currentCar?.fuel_type}
                                    >
                                        Carburante
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[100px]'}
                                        carInfo={currentCar?.engine_capacity}
                                    >
                                        Cilindrata
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[80px]'}
                                        carInfo={currentCar?.power_kw}
                                    >
                                        Potenza
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[60px]'}
                                        carInfo={currentCar?.base_price}
                                    >
                                        Prezzo base
                                    </ModelInfo>
                                </div>
                            </div>

                            {/* Images */}
                            <img
                                className={`w-full object-cover transition-all ease-in-out duration-700 ${
                                    index === currentIndex ? 'saturate-100 scale-100' : 'saturate-0 scale-150'
                                }`}
                                src={model.image}
                                alt={model.name}
                            />

                            {/* Name Model */}
                            <ModelName
                                key={filteredModels[currentIndex]?.name}
                                filteredModels={filteredModels}
                                currentIndex={currentIndex}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
