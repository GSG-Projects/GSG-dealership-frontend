import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchModels } from "../../../store/CarModels";
import { animate } from "motion";
import { motion, useMotionValue } from "framer-motion";
import { useMeasure } from "@uidotdev/usehooks";

export default function MoreRequest() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.models);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredModels, setFilteredModels] = useState([]);

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        setFilteredModels(items.filter((model) => model.most_request === 1));
    }, [items]);

    const handleNext = () => {
        setCurrentIndex((prev) => 
            prev === filteredModels.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        let controls;
        let finalPosition = width;

        setCurrentIndex((prev) => 
            prev === 0 ? filteredModels.length - 1 : prev - 1
        );

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 2,
        })
    };
    
    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchModels());
        }
    }, [dispatch, status]);

    console.log(filteredModels);

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

    return(
        <div className="h-screen relative bg-black">
            <motion.div className="absolute left-0 top-0 flex h-full w-full overflow-hidden" ref={ref}>
                {filteredModels.length > 0 && (
                    <>
                        <img
                            className="object-cover w-1/12 h-full opacity-50"
                            key={filteredModels[(currentIndex + 2 + filteredModels.length) % filteredModels.length]?.name}
                            src={filteredModels[(currentIndex + 2 + filteredModels.length) % filteredModels.length]?.image}
                            alt={filteredModels[(currentIndex + 2 + filteredModels.length) % filteredModels.length]?.name}
                        />
                        <img
                            className="object-cover w-4/12 h-full opacity-50"
                            key={filteredModels[(currentIndex + 1 + filteredModels.length) % filteredModels.length]?.name}
                            src={filteredModels[(currentIndex + 1 + filteredModels.length) % filteredModels.length]?.image}
                            alt={filteredModels[(currentIndex + 1 + filteredModels.length) % filteredModels.length]?.name}
                        />
                        <img
                            style={{x: xTranslation}}
                            className="object-cover w-7/12 h-full"
                            key={filteredModels[currentIndex].name}
                            src={filteredModels[currentIndex].image}
                            alt={filteredModels[currentIndex].name}
                        />
                    </>
                )}
            </motion.div>
            <div className="absolute top-36 left-64">
                <div className="w-full">
                    <h1 className="uppercase mb-6 font-bold text-3xl">
                        Modelli più richiesti
                    </h1>
                    {filteredModels.length > 0 && (
                        <div>
                            <div className="flex mb-52">
                                <button 
                                    onClick={handlePrev}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                                >
                                    Indietro
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                                >
                                    Avanti
                                </button>
                            </div>
                            
                            <p className="uppercase font-bold text-xl">
                                Brand
                            </p>
                            <p className="uppercase font-bold text-8xl">
                                {filteredModels[currentIndex].name}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
