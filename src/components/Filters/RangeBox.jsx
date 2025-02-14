import InputRange from "./InputRange";

export default function RangeBox({ dropDown, filterType }) {
    const filterOptions = {
        price: [
            "Qualsiasi", "40.000 €", "50.000 €", "60.000 €", "70.000 €", 
            "80.000 €", "90.000 €", "100.000 €", "150.000 €", "200.000 €", "250.000 € +"
        ],
        cilindrata: [
            "Qualsiasi", "1000", "2000", "3000", "4000",
            "5000", "6000", "7000", "8000+"
        ],
        power: [
            "Qualsiasi", 
            "150 kW", 
            "200 kW", 
            "250 kW", 
            "300 kW", 
            "350 kW", 
            "400 kW", 
            "500 kW", 
            "600 kW", 
            "700 kW"
        ],
    };

    const options = filterOptions[filterType] || [];

    return (
        <div className={`p-5 bg-gradient-to-b border border-t-0 border-white from-neutral-950 to-neutral-800 text-white gap-5 text-center cursor-pointer transition-all ease-in-out duration-500 flex font-kanit ${dropDown ? 'block' : 'hidden'}`}>
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
    );
}
