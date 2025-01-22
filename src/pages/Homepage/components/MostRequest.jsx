import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../store/CarModels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MostRequest.css';
import ButtonModels from "./ButtonModels";
import ModelName from "./ModelName";
import Loading from "../../../components/Loading";

export default function MostRequest() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.models);
    const [buttonClickStates, setButtonClickStates] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        setFilteredModels(items.filter((model) => model.most_request === 1));
        setButtonClickStates(new Array(items.length).fill(false));
    }, [items]);

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
    console.log(buttonClickStates);

    const handleMouseLeave = (index) => {
        setButtonClickStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchModels());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
            <Loading />
        );
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="h-screen relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">
            {/* Name Model */}
            <ModelName 
                key={filteredModels[currentIndex]?.name}
                filteredModels={filteredModels}
                currentIndex={currentIndex}
            />

            {/* Cointainer Image */}
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
                    {/* Model Infos */}

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
                            className={`absolute top-0 left-0 z-10 transition-all ease-in-out duration-300
                                ${buttonClickStates[index] ? 'w-1/2 h-full bg-black/50' : 'w-0 opacity-0 h-full bg-black/50'}
                            `}
                            style={{
                                clipPath: 'polygon(0% 0, 100% 0, 74% 100%, 0 100%)',
                            }}
                        >
                            
                        </div>

                        {/* Images */}
                        <img 
                            className={`w-full object-cover transition-all ease-in-out duration-700 
                                ${index === currentIndex ? 'saturate-100 scale-100' : 'saturate-0 scale-150'}`
                            }
                            src={model.image} 
                            alt={model.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}