import { useState } from "react";
import './ModelItem.css';
import { Link } from "react-router-dom";
import CarInfo from "./CarInfo";
import { useMeasure } from "@uidotdev/usehooks";

export default function ModelItem({ image, name, id, carburante, prezzo, cilindrata, potenza }) {
    const [barState, setBarState] = useState({});
    const [hovered, setHovered] = useState(false);

    let [ref, { width }] = useMeasure();

    function handleEnter(index) {
        setBarState((prev) => ({ ...prev, [index]: 'in' }));
        setHovered((prev) => prev = true);
    }

    function handleOut(index) {
        setBarState((prev) => ({ ...prev, [index]: 'out' }));
        setHovered((prev) => prev = false);
    }

    return (
        <Link className="border mx-auto h-[30rem] border-white w-7/12 transition-all ease-in-out duration-500 overflow-hidden">
            <div
                className="text-white h-full relative shadow-lg"
                onMouseEnter={() => handleEnter(id)}
                onMouseLeave={() => handleOut(id)}
            >
                <img 
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-all ease-in-out duration-500" 
                    src={image} 
                    alt={name} 
                />
                <div
                    className="text-xl font-bold bg-gradient-to-r from-neutral-200 to-white text-neutral-950 py-8 absolute bottom-0 right-0 z-10 text-center transition-all ease-in-out duration-200 w-auto px-16 h-11 flex justify-center items-center font-kanit"
                    style={{ clipPath: 'polygon(30px 0, 100% 0, 100% 100%, 0 100%)' }}
                    ref={ref}
                >
                    {name}
                </div>

                <div 
                    className={`absolute bottom-0 left-0 h-16 bg-gradient-to-r from-neutral-800/70 to-neutral-900 outline-1 transition-all ease-in-out duration-300 pointer-events-none flex justify-start items-center font-kanit border-t border-white
                        ${barState[id] === 'in' ? 'expand-bar-in' : barState[id] === 'out' ? 'expand-bar-out' : ''}`}
                >
                    <ul 
                        className={`grid grid-cols-4 h-full transition-all ease-in-out duration-1000 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: hovered ? `calc(100% - ${width}px)` : '0' }}
                    >
                        <CarInfo
                            isFirst={true} 
                            info={carburante}
                        >
                            Carburante
                        </CarInfo>
                        <CarInfo 
                            info={cilindrata}
                        >
                            Cilindrata
                        </CarInfo>
                        <CarInfo 
                            info={potenza}
                        >
                            Potenza
                        </CarInfo>
                        <CarInfo 
                            isPrice={true}
                            info={prezzo}
                        >
                            Prezzo
                        </CarInfo>
                    </ul>
                </div>
            </div>
        </Link>
    );
}
