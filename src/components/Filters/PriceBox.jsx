export default function PriceBox({dropDown}) {
    return(
        <div className={`px-3 py-2 bg-gradient-to-b border border-white from-neutral-950 to-neutral-800 text-white gap-5 text-center cursor-pointer transition-all ease-in-out duration-500 flex font-kanit ${dropDown ? 'block' : 'hidden'}`}>
            <div className="flex flex-col gap-2">
                <label>
                    MIN:
                </label>
                <select className="w-[7rem] py-1 pl-1 text-black" name="min" aria-placeholder="N/A" id="min-select">
                    <option value="">Qualsiasi</option>
                    <option value="40000">40.000 €</option>
                    <option value="50000">50.000 €</option>
                    <option value="60000">60.000 €</option>
                    <option value="70000">70.000 €</option>
                    <option value="80000">80.000 €</option>
                    <option value="90000">90.000 €</option>
                    <option value="100000">100.000 €</option>
                    <option value="150000">150.000 €</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label>
                    MAX:
                </label>
                <select className="w-[7rem] py-1 pl-1 text-black" name="max" aria-placeholder="N/A" id="max-select">
                    <option value="">Qualsiasi</option>
                    <option value="50000">50.000 €</option>
                    <option value="60000">60.000 €</option>
                    <option value="70000">70.000 €</option>
                    <option value="80000">80.000 €</option>
                    <option value="90000">90.000 €</option>
                    <option value="100000">100.000 €</option>
                    <option value="150000">150.000 €</option>
                    <option value="200000">200.000 €</option>
                    <option value="250000">250.000 € +</option>
                </select>
            </div>
        </div>
    );
}
