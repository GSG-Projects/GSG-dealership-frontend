import { useState } from "react";
import ListDropDown from "./ListDropDown";

export default function Transmission({ dropDown }) {
    const [selectedTransmission, setSelectedTransmission] = useState([]);

    function toggleTransmissionSelection(value) {
        setSelectedTransmission((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value] 
        );
    }

    return (
        <ul 
            className={`w-full border-t-0 absolute left-0 top-[3.9rem] overflow-hidden drop-menu transition-all ease-in-out duration-300 z-50 ${dropDown ? 'block border border-white' : 'hidden border-0'}`}
        >
            {["Manuale", "Automatico", "Semiautomatico"].map((transmissionType, index) => (
                <ListDropDown
                    key={index}
                    isSelected={selectedTransmission.includes(transmissionType)}
                    onMultipleSelect={() => toggleTransmissionSelection(transmissionType)}
                    dropDown={dropDown}
                    style={{ '--i': index + 1 }}
                >
                    {transmissionType}
                </ListDropDown>
            ))}
        </ul>
    );
}
