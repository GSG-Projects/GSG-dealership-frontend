import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../store/CarModels";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MostRequest.css';

export default function MostRequest() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.models);
    const [ buttonClickState, setButtonClickState ] = useState(false); 

    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        setFilteredModels(items.filter((model) => model.most_request === 1));
    }, [items]);

    function handleClick(index) {
        setCurrentIndex(index);
    }

    function handleButtonClick(index) {
        setButtonClickState((prev) => prev = !buttonClickState)
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchModels());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
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
        );
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="h-screen relative bg-gradient-to-b from-black to-neutral-900 overflow-visible">
            <div 
                className="bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 -translate-x-1/2 py-8 w-1/4 outline-1 outline-white absolute bottom-0 left-1/2 z-10 text-center"
                style={{
                    clipPath: 'polygon(13% 0, 87% 0, 100% 100%, 0 100%)',
                    border: '1px solid white'
                }}
            >
                <h1 className="uppercase font-bold w-full text-white font-sans">
                    Modelli più richiesti
                </h1>
                {filteredModels.length > 0 && (
                    <p
                        key={filteredModels[currentIndex]?.name}
                        className="model-name uppercase text-white w-full font-bold text-6xl font-oswald"
                    >
                        {filteredModels[currentIndex]?.name}
                    </p>
                )}
            </div>
            <div className="absolute left-0 top-0 flex h-full w-full">
                {filteredModels.map((model, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleClick(index)}
                        className={`transition-all relative h-full flex ease-in-out duration-500 overflow-hidden shadow-inner ${
                            index === currentIndex ? "blur-none opacity-100 w-full" : "opacity-30 blur-sm w-4/12"
                        }`}
                        style={{
                            clipPath: `${index === currentIndex ? 'polygon(13% 0, 100% 0, 87% 100%, 0 100%)' : 'polygon(40% 0, 100% 0, 60% 100%, 0 100%)'}`,
                        }}
                    >
                        <button
                            className="w-14 aspect-square absolute top-10 bg-black z-10 left-40 transition-all ease-in-out duration-300 text-neutral-300 hover:bg-white hover:text-black"
                            style={{ 
                                clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
                            }}
                            onClick={() => handleButtonClick(index)}
                        >
                            <FontAwesomeIcon 
                                className={`${buttonClickState ? 'rotate-90' : ''} transition-transform duration-300`}
                                icon={faChevronRight} 
                            />
                        </button>
                        <img 
                            className={`w-full object-cover transition-all ease-in-out duration-700 ${index === currentIndex ? 'saturate-100 scale-100' : 'saturate-0 scale-150'}`}
                            src={model.image} 
                            alt={model.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}