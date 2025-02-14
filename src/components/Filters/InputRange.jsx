import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function InputRange({ children, min, max, options }) {
    const dispatch = useDispatch();
    const validOptions = options || [];

    const [selectedValue, setSelectedValue] = useState(validOptions[0] || "Qualsiasi");

    useEffect(() => {
        if (validOptions.length > 0) {
            setSelectedValue(validOptions[0]); 
        }
    }, [dispatch, validOptions]);

    return (
        <div className="flex flex-col gap-2">
            <label className="uppercase">
                {children}
            </label>
            <select 
                className="px-2 pl-0 w-auto py-1 text-black rounded text-center" 
                name={min ? "min" : "max"} 
                aria-placeholder="N/A"
                onChange={(e) => setSelectedValue(e.target.value)}
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
