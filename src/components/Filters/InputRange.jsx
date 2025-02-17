import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function InputRange({ children, min, options }) {
    const validOptions = options || [];

    const [selectedValue, setSelectedValue] = useState(validOptions[0] || "Qualsiasi");
    const resetValue = useSelector((state) => state.filters.reset);

    useEffect(() => {
        setSelectedValue(resetValue);
    }, [resetValue]);

    console.log(selectedValue);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="uppercase">
                {children}
            </label>
            <select 
                className="px-2 pl-0 w-auto py-1 text-black rounded text-center" 
                name={min ? "min" : "max"} 
                aria-placeholder="N/A"
                onChange={handleChange}
                value={selectedValue}
            >
                {validOptions.length > 0 ? (
                    validOptions.map((option, index) => (
                        <option 
                            key={index} 
                            value={option}
                        >
                            {option}
                        </option>
                    ))
                ) : (
                    <option value="">Nessuna opzione disponibile</option>
                )}
            </select>
        </div>
    );
}
