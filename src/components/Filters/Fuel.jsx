import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFuel } from '../../store/features/filtersSlice';
import ListDropDown from "./ListDropDown";
import './Filters.css';

export default function Fuel({ dropDown }) {
    const dispatch = useDispatch();
    const selectedFuel = useSelector(state => state.filters.fuel);
    const [isVisible, setIsVisible] = useState(dropDown);
    const timeoutRef = useRef(null);

    const fuelTypes = ["Benzina", "Diesel", "Elettrico", "Ibrido"];
    const exitAnimationDuration = 300 * fuelTypes.length;

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

    function toggleFuelSelection(value) {
        dispatch(setFuel(
            selectedFuel.includes(value)
                ? selectedFuel.filter((item) => item !== value)
                : [...selectedFuel, value]
        ));
    }

    return (
        <ul 
            className={`w-full border-t-0 absolute left-0 top-[3.9rem] border drop-menu overflow-hidden z-50 
            ${isVisible ? 'block' : 'hidden'}
            ${dropDown ? 'drop-menu-in' : 'drop-menu-out'}`}
            style={{ '--i': exitAnimationDuration + 'ms', '--total': fuelTypes.length }}
        >
            {fuelTypes.map((fuelType, index) => (
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