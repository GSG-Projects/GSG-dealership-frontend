import PriceBox from "./PriceBox";

export default function Price({dropDown}) {
    return(
        <>
            <div
                className={`absolute -left-1/2 top-7 bg-neutral-800 transition-all ease-in-out duration-300 z-50`}
            >
                <PriceBox 
                    dropDown={dropDown}
                />
            </div>
        </>
    );
}