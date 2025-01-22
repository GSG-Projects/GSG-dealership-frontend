import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../store/API/CarModels";
import { fetchBrands } from "../../../store/API/Brands";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MostRequest.css';
import ButtonModels from "./ButtonModels";
import ModelName from "./ModelName";
import Loading from "../../../components/Loading";

export default function MostRequest() {
    const dispatch = useDispatch();
    const { items: models, status: modelsStatus, error: modelsError } = useSelector((state) => state.models);
    const { items: brands, status: brandsStatus, error: brandsError } = useSelector((state) => state.brands);

    const [currentBrand, setCurrentBrand] = useState(null);
    const [buttonClickStates, setButtonClickStates] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);

    // Fetch models and brands on initial render
    useEffect(() => {
        if (modelsStatus === 'idle') {
            dispatch(fetchModels());
        }
        if (brandsStatus === 'idle') {
            dispatch(fetchBrands());
        }
    }, [dispatch, modelsStatus, brandsStatus]);

    // Filter most requested models once models are loaded
    useEffect(() => {
        if (models.length > 0) {
            const mostRequested = models.filter((model) => model.most_request === 1);
            setFilteredModels(mostRequested);
            setButtonClickStates(new Array(mostRequested.length).fill(false));
        }
    }, [models]);

    // Update currentBrand when currentIndex changes
    useEffect(() => {
        setTimeout(() => {
            if (filteredModels.length > 0 && brands.length > 0) {
                const currentModel = filteredModels[currentIndex];
                const brand = brands.find((b) => b.id === currentModel.brand_id);
                setCurrentBrand(brand);
            }
        }, 200)
    }, [currentIndex, filteredModels, brands]);

    const handleHover = (index) => {
        setCurrentIndex(index);
    };

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

    if (modelsStatus === 'loading' || brandsStatus === 'loading') {
        return <Loading />;
    }

    if (modelsStatus === 'failed') {
        return <p>Error loading models: {modelsError}</p>;
    }

    if (brandsStatus === 'failed') {
        return <p>Error loading brands: {brandsError}</p>;
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
                            className={`transition-all relative h-full flex ease-in-out duration-500 overflow-hidden shadow-inner ${
                                index === currentIndex ? "blur-none opacity-100 w-full" : "opacity-30 blur-sm w-4/12"
                            }`}
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
                            >
                                <FontAwesomeIcon
                                    className={`${buttonClickStates[index] ? 'rotate-90' : ''} transition-transform duration-300`}
                                    icon={faChevronRight}
                                />
                            </ButtonModels>

                            {/* Infos */}
                            <div
                                className={`absolute top-0 left-0 z-10 transition-all ease-in-out duration-300 ${
                                    buttonClickStates[index] ? 'w-1/2 h-full bg-black/50' : 'w-0 opacity-0 h-full bg-black/50'
                                }`}
                                style={{
                                    clipPath: 'polygon(0% 0, 100% 0, 74% 100%, 0 100%)',
                                }}
                            >
                                <div className="m-auto w-full mt-40 text-white font-oswald uppercase">
                                    <div className="mb-14">
                                        <h1 className="text-4xl bg-gradient-to-r from-black to-transparent font-bold py-2 pl-[160px]">
                                            Brand
                                        </h1>
                                        <h2 className="text-3xl ml-[160px]">
                                            {currentBrand?.name || "Loading..."}
                                        </h2>
                                    </div>
                                    <div className="mb-14">
                                        <h1 className="text-4xl bg-gradient-to-r from-black to-transparent font-bold py-2 pl-[120px]">
                                            Descrizione
                                        </h1>
                                        <h2 className="text-3xl ml-[120px]">
                                            {currentBrand?.name || "Loading..."}
                                        </h2>
                                    </div>
                                    <div className="mb-14">
                                        <h1 className="text-4xl bg-gradient-to-r from-black to-transparent font-bold py-2 pl-[120px]">
                                            Cilindrata
                                        </h1>
                                        <h2 className="text-3xl ml-[120px]">
                                            {currentBrand?.name || "Loading..."}
                                        </h2>
                                    </div>
                                    <div className="mb-14">
                                        <h1 className="text-4xl bg-gradient-to-r from-black to-transparent font-bold py-2 pl-[100px]">
                                            Potenza
                                        </h1>
                                        <h2 className="text-3xl ml-[100px]">
                                            {currentBrand?.name || "Loading..."}
                                        </h2>
                                    </div>
                                    <div className="mb-14">
                                        <h1 className="text-4xl bg-gradient-to-r from-black to-transparent font-bold py-2 pl-[80px]">
                                            Prezzo base
                                        </h1>
                                        <h2 className="text-3xl ml-[80px]">
                                            {currentBrand?.name || "Loading..."}
                                        </h2>
                                    </div>
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
