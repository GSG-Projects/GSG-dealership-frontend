import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBrands } from "../../../store/API/Brands";
import { fetchModels } from "../../../store/API/CarModels";
import { fetchCars } from "../../../store/API/Cars";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './Vetrina.css';

import ButtonModels from "./Vetrina/ButtonModels";
import ModelName from "./Vetrina/ModelName";
import "../../../components/LoadingBox.css";
import ModelInfo from "./Vetrina/ModelInfo";

export default function Vetrina() {
    const dispatch = useDispatch();
    const { items: models, status: modelsStatus, error: modelsError } = useSelector((state) => state.models);
    const { items: cars, status: carsStatus, error: carsError } = useSelector((state) => state.cars);
    const { items: brands, status: brandsStatus, error: brandsError } = useSelector((state) => state.brands);

    const [currentBrand, setCurrentBrand] = useState(null);
    const [currentCar, setCurrentCar] = useState(null);
    const [buttonClickStates, setButtonClickStates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const x = (e.clientX - windowWidth / 2) / windowWidth;
        const y = (e.clientY - windowHeight / 2) / windowHeight;

        setOffset({
            x: -x * 15,
            y: -y * 15,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [])


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
                console.log(cars);
                const car = cars.find((b) => b.car_model_id === currentModel.id);
                setCurrentCar(car);
            }
        }, 200)
    }, [currentIndex, filteredModels, cars]);

    const handleButtonClick = (index) => {
        setButtonClickStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const handleHover = (index) => {
        if (index !== currentIndex) { 
            setButtonClickStates((prevStates) => {
                const newStates = [...prevStates];
                newStates[currentIndex] = false; 
                return newStates;
            });
    
            setCurrentIndex(index); 
        }
    };
    

    if (modelsStatus === 'loading' || brandsStatus === 'loading' || carsStatus === 'loading') {
        return (
            <div>
                <div className="font-bold font-oswald text-6xl bg-gradient-to-b from-neutral-950 to-black text-white/80 h-56 uppercase flex justify-center items-center">
                    Vetrina
                </div>
                <div className="h-screen relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">

                    {/* Container Image */}
                    <div className="absolute left-0 top-0 flex h-full w-full">
                        {Array.from({length: 4}, (_, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleHover(index)}
                                className={`transition-all bg-gradient-to-br from-white/20 via-white/15 to-white/20 relative h-full flex ease-in-out duration-500 overflow-hidden shadow-inner 
                                    ${index === currentIndex ? "blur-none opacity-100 w-full" : "opacity-30 blur-sm w-4/12"}`
                                }
                                style={{
                                    clipPath: `${index === currentIndex ? 'polygon(13% 0, 100% 0, 87% 100%, 0 100%)' : 'polygon(40% 0, 100% 0, 60% 100%, 0 100%)'}`,
                                }}
                            >
                                {/* Loading */}
                                <div 
                                    className={`w-screen object-cover transition-all ease-in-out duration-700 bg-white/20 blur-3xl h-1/4 absolute loading-large opacity-0 ${
                                        index === currentIndex ? 'saturate-100 scale-100' : 'saturate-0 scale-150'
                                    }`}
                                >
                                </div>   
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (modelsStatus === 'failed' || brandsStatus === 'failed' || carsStatus === 'failed') {
        return (
            <>
                <div className="font-bold font-oswald text-6xl bg-gradient-to-b from-neutral-950 to-black text-white/80 h-56 uppercase flex justify-center items-center">
                    Vetrina
                </div>

                <div className="py-28 relative bg-gradient-to-b from-black to-neutral-900">
                    <div className="uppercase gap-4 text-neutral-50 p-24 text-center font-kanit flex w-fit mx-auto flex-col items-center justify-center">
                        <p className="text-7xl font-bold flex gap-10">
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                            />
                            <span>
                                ERROR 401
                            </span>
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                            />
                        </p>
                        <p className="text-4xl font-semibold">
                            {modelsError}
                        </p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="font-bold font-oswald text-6xl bg-gradient-to-b from-neutral-950 to-black text-white/80 h-56 uppercase flex justify-center items-center">
                Vetrina
            </div>

            <div className="h-screen relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">

                {/* Container Image */}
                <div className="absolute left-0 top-0 flex h-full w-full">
                    {filteredModels.map((model, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleHover(index)}
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
                                        distanceCss={'pl-[160px]'}
                                    >
                                        Brand
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[135px]'}
                                        carInfo={currentCar?.fuel_type}
                                    >
                                        Alimentazione
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[110px]'}
                                        carInfo={currentCar?.engine_capacity}
                                    >
                                        Cilindrata
                                    </ModelInfo>
                                    <ModelInfo
                                        brandName={currentBrand?.name}
                                        distanceCss={'pl-[85px]'}
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
                                style={{
                                    ...(index === currentIndex
                                    ? {
                                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                                        transition: "transform 0.1s ease-out",
                                        }
                                    : {}),
                                }}
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
        </>
    );
}
