import { useState } from "react";
import ListDropDown from "./ListDropDown";

export default function Cilindrata({ dropDown }) {
    const [selected, setSelected] = useState(null);

    function handleSelection(index) {
        setSelected((prev) => (prev === index ? null : index));
    }

    return (
        <ul 
            className={`w-full border-t-0 absolute left-0 top-[3.4rem] bg-neutral-800 border text-center border-white transition-all ease-in-out duration-300 z-50 ${dropDown ? 'block' : 'hidden'}`}
        >
            {["250 - 349 kW", "350 - 499 kW", "500 - 699 kW", "700 - 999 kW", "1000+ kW"].map((range, index) => (
                <ListDropDown
                    key={index}
                    cilindrata={true}
                    isSelected={selected === index}
                    onSingleSelect={() => handleSelection(index)}
                >
                    {range}
                </ListDropDown>
            ))}
        </ul>
    );
}
