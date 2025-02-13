import { useState } from "react";
import ListDropDown from "./ListDropDown";

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
            className={`w-10/12 border-t-0 absolute left-0 top-11 bg-neutral-800 border border-white transition-all ease-in-out duration-300 z-50 ${dropDown ? 'block' : 'hidden'}`}
        >
            {["Benzina", "Diesel", "Elettrico", "Ibrido"].map((fuelType, index) => (
                <ListDropDown
                    key={index}
                    fuel={true}
                    isSelected={selectedFuel.includes(fuelType)}
                    onMultipleSelect={() => toggleFuelSelection(fuelType)}
                >
                    {fuelType}
                </ListDropDown>
            ))}
        </ul>
    );
}
