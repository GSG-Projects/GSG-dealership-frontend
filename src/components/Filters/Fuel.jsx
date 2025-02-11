import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListDropDown from "./ListDropDown";

export default function Fuel() {
    const [dropDown, setDropDown] = useState(false);

    function handleDropDown() {
        setDropDown(prev => !prev);
    }

    return (
        <div className="w-full relative">
            <div
                onClick={handleDropDown}
                className="uppercase font-bold flex items-center gap-3 w-2/3 cursor-pointer"
            >
                Carburante
                <FontAwesomeIcon
                    className={`size-3 transition-transform ease-in-out duration-300 ${dropDown ? 'rotate-90' : 'rotate-0'}`}
                    icon={faChevronRight}
                />
            </div>
            <ul 
                className={`w-2/3 absolute left-0 top-7 bg-neutral-800 border border-white transition-all ease-in-out duration-300 z-50 ${dropDown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            
            >
                <ListDropDown>Benzina</ListDropDown>
                <ListDropDown>Diesel</ListDropDown>
                <ListDropDown>Elettrico</ListDropDown>
                <ListDropDown>Ibrido</ListDropDown>
            </ul>
        </div>
    );
}
