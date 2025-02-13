export default function InputPrice({children, min, max}) {
    return(
        <div className="flex flex-col gap-2">
            <label className="uppercase">
                {children}
            </label>
            <select className="w-[7rem] py-1 pl-1 text-black rounded" name="min" aria-placeholder="N/A" id="min-select">
                <option value="">Qualsiasi</option>
                {
                    min &&
                    <option value="40000">40.000 €</option>
                }
                <option value="50000">50.000 €</option>
                <option value="60000">60.000 €</option>
                <option value="70000">70.000 €</option>
                <option value="80000">80.000 €</option>
                <option value="90000">90.000 €</option>
                <option value="100000">100.000 €</option>
                <option value="150000">150.000 €</option>
                <option value="200000">200.000 €</option>
                {
                    max && 
                    <option value="250000">250.000 € +</option>
                }
            </select>
        </div>
    );
}