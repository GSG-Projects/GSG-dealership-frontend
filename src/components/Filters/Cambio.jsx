import { useEffect, useRef, useState } from "react";
import ListDropDown from "./ListDropDown";
import './Filters.css';

export default function Transmission({ dropDown }) {
    const [selectedTransmission, setSelectedTransmission] = useState([]);
    const [isVisible, setIsVisible] = useState(dropDown);
    const timeoutRef = useRef(null);

    const transmissionTypes = ["Manuale", "Automatico", "Semiautomatico"];
    const exitAnimationDuration = 300 * transmissionTypes.length;

    useEffect(() => {
        if (dropDown) {
            setIsVisible(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        } else {
            timeoutRef.current = setTimeout(() => setIsVisible(false), exitAnimationDuration);
        }
    }, [dropDown, exitAnimationDuration]);

    function toggleTransmissionSelection(value) {
        setSelectedTransmission((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value] 
        );
    }

    return (
        <ul 
            className={`w-full border-t-0 absolute left-0 top-[3.9rem] border drop-menu overflow-hidden z-50 
            ${isVisible ? 'block' : 'hidden'}
            ${dropDown ? 'drop-menu-in' : 'drop-menu-out'}`}
            style={{ '--i': exitAnimationDuration + 'ms', '--total': transmissionTypes.length }}
        >
            {transmissionTypes.map((transmissionType, index) => (
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