import PriceBox from "./PriceBox";

export default function Price({dropDown}) {
    return(
        <>
            <div
                className={`w-2/3 absolute left-0 top-7 bg-neutral-800 border border-white transition-all ease-in-out duration-300 z-50 ${dropDown ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <PriceBox />
            </div>
        </>
    );
}