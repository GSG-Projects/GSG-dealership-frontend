import { useState } from "react";
import ListDropDown from "./ListDropDown";
import './Filters.css';

export default function Fuel({ dropDown }) {
    const [selectedFuel, setSelectedFuel] = useState([]);

    function toggleFuelSelection(value) {
        setSelectedFuel((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value] 
        );
    }

    return (
        <ul 
            className={`w-full border-t-0 absolute left-0 top-[3.9rem] transition-all ease-in-out duration-300 overflow-hidden z-50 drop-menu ${dropDown ? 'block border border-white' : 'hidden border-0'}`}
        >
            {["Benzina", "Diesel", "Elettrico", "Ibrido"].map((fuelType, index) => (
                <ListDropDown
                    key={index}
                    isSelected={selectedFuel.includes(fuelType)}
                    onMultipleSelect={() => toggleFuelSelection(fuelType)}
                    dropDown={dropDown}
                    style={{ '--i': index + 1 }}
                >
                    {fuelType}
                </ListDropDown>
            ))}
        </ul>
    );
}