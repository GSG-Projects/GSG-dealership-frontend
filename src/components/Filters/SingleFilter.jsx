import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFuel, setCilindrata, setPower, setTransmission, setPrice } from '../../store/features/filtersSlice';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fuel from "./Fuel";
import Price from "./Price";
import Cilindrata from "./Cilindrata";
import Power from "./Power";
import Cambio from "./Cambio";

export default function SingleFilter({children, fuel, price, cilindrata, power, transmission}) {
    const [dropDown, setDropDown] = useState(false);
    const dropdownRef = useRef(null); 
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    function handleDropDown() {
        setDropDown(prev => !prev);
    }

    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (fuel) dispatch(setFuel(filters.fuel));
        if (cilindrata) dispatch(setCilindrata(filters.cilindrata));
        if (power) dispatch(setPower(filters.power));
        if (transmission) dispatch(setTransmission(filters.transmission));
        if (price) dispatch(setPrice(filters.price));
    }, [filters, dispatch, fuel, cilindrata, power, transmission, price]);

    return(
        <div className="w-full flex justify-center relative" ref={dropdownRef}>
            <button
                onClick={handleDropDown}
                className="uppercase font-bold flex justify-center items-center gap-3 w-2/3 cursor-pointer"
            >
                {children}
                <FontAwesomeIcon
                    className={`size-3 transition-transform ease-in-out duration-300 ${dropDown ? 'rotate-90' : 'rotate-0'}`}
                    icon={faChevronRight}
                />
            </button>
            {fuel && <Fuel dropDown={dropDown} />}
            {cilindrata && <Cilindrata dropDown={dropDown} />}
            {power && <Power dropDown={dropDown} />}
            {transmission && <Cambio dropDown={dropDown} />}
            {price && <Price dropDown={dropDown} />}
        </div>
    );
}