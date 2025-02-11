export default function PriceBox() {
    return(
        <div className="px-3 py-2 bg-gradient-to-b from-neutral-950 to-neutral-800 text-white gap-2 cursor-pointer transition-all ease-in-out duration-500">
            <div>
                <label>
                    MIN:
                </label>
                <select name="min" id="min-select">
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

            <div>
                <label>
                    MAX:
                </label>
                <select name="max" id="max-select">
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
