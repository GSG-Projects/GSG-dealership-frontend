import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../store/CarModels";

export default function MostRequest() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.models);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
        setFilteredModels(items.filter((model) => model.most_request === 1));
    }, [items]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

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
        <div className="h-screen relative bg-black overflow-visible">
            <div className="bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 -translate-x-1/2 py-8 w-1/4 border border-white absolute bottom-0 left-1/2 z-10 text-center">
                <h1 className="uppercase font-bold w-full text-white font-sans">
                    Modelli più richiesti
                </h1>
                {filteredModels.length > 0 && (
                    <p className="uppercase text-white w-full font-bold text-6xl font-oswald">
                        {filteredModels[currentIndex]?.name}
                    </p>
                )}
            </div>
            <div className="absolute left-0 top-0 flex h-full w-full">
                {filteredModels.map((model, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleClick(index)}
                        className={`transition-all h-full flex ease-in-out duration-500 overflow-hidden shadow-inner ${
                            index === currentIndex ? "blur-none opacity-100 w-full" : "opacity-30 blur-sm w-4/12"
                        }`}
                        style={{
                            clipPath: `${index === currentIndex ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}`,
                        }}
                    >
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