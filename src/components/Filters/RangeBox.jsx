import { useEffect, useRef, useState } from "react";
import InputRange from "./InputRange";
import './Filters.css';
import { useSelector } from "react-redux";

export default function RangeBox({ dropDown, filterType }) {
    const cilindrata = useSelector((state) => state.filters.cilindrata);
    const price = useSelector((state) => state.filters.price);
    const power = useSelector((state) => state.filters.power);

    const filterOptions = [cilindrata, price, power];
    
    const options = filterOptions[filterType] || [];
    console.log(options);
    const [isVisible, setIsVisible] = useState(dropDown);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (dropDown) {
            setIsVisible(true);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        } else {
            timeoutRef.current = setTimeout(() => setIsVisible(false), 300);
        }
    }, [dropDown]);

    return (
        <div className="overflow-hidden">
            <div className={`p-5 bg-gradient-to-b border border-t-0 border-white from-neutral-950 to-neutral-800 text-white gap-5 text-center cursor-pointer transition-all ease-in-out duration-500 flex font-kanit
            ${isVisible ? 'block' : 'hidden'}
            ${dropDown ? 'range-box-in' : 'range-box-out'}`}
            >
                <InputRange 
                    min={true} 
                    options={options} 
                >
                    MIN
                </InputRange>       
                <InputRange 
                    max={true} 
                    options={options} 
                >
                    MAX
                </InputRange>
            </div>
        </div>
    );
}
