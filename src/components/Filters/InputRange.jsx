export default function InputRange({ children, min, max, options }) {
    const validOptions = options || [];

    return (
        <div className="flex flex-col gap-2">
            <label className="uppercase">
                {children}
            </label>
            <select className="px-2 pl-0 w-auto py-1 text-black rounded text-center" name={min ? "min" : "max"} aria-placeholder="N/A">
                {validOptions.length > 0 ? (
                    validOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                ) : (
                    <option value="">Nessuna opzione disponibile</option>
                )}
            </select>
        </div>
    );
}
