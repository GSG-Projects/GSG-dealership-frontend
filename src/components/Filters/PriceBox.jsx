import InputPrice from "./InputPrice";

export default function PriceBox({dropDown}) {
    return(
        <div className={`p-5 bg-gradient-to-b border border-t-0 border-white from-neutral-950 to-neutral-800 text-white gap-5 text-center cursor-pointer transition-all ease-in-out duration-500 flex font-kanit ${dropDown ? 'block' : 'hidden'}`}>
            <InputPrice
                min={true}
            >
                MIN
            </InputPrice>       
            <InputPrice
                max={true}
            >
                MAX
            </InputPrice>
        </div>
    );
}
