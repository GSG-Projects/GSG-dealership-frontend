import { useState } from "react";
import './ModelItem.css';
import { Link } from "react-router-dom";

export default function ModelItem({ image, name, id }) {
    const [barState, setBarState] = useState({});
    const [hovered, setHovered] = useState(false);

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
                <img className="w-full h-full object-cover scale-110 hover:scale-100 transition-all ease-in-out duration-500" src={image} alt={name} />
                <div
                    className="text-xl font-bold bg-gradient-to-r from-neutral-200 to-white text-neutral-950 py-8 absolute bottom-0 right-0 z-10 text-center transition-all ease-in-out duration-200 w-auto px-16 h-11 flex justify-center items-center font-kanit"
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                    {name}
                </div>

                <div 
                    className={`absolute bottom-0 left-0 h-16 bg-gradient-to-r from-neutral-800/70 to-neutral-900  outline-1 transition-all ease-in-out duration-300 pointer-events-none flex justify-start items-center font-kanit border-t border-white
                        ${hovered ? 'py-8 px-10' : 'p-0'}
                        ${barState[id] === 'in' ? 'expand-bar-in' : barState[id] === 'out' ? 'expand-bar-out' : ''}`}
                >
                    <ul className={`grid grid-cols-4 transition-all ease-in-out duration-1000 ${hovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}>
                        <li>
                            Carburante 
                        </li>
                        <li>
                            Cilindrata 
                        </li>
                        <li>
                            Potenza 
                        </li>
                        <li>
                            Prezzo 
                        </li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}
