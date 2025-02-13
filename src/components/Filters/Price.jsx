import PriceBox from "./PriceBox";

export default function Price({dropDown}) {
    return(
        <>
            <div
                className={`absolute -left-2/2 top-[3.4rem] bg-neutral-800 transition-all ease-in-out duration-300 z-50`}
            >
                <PriceBox 
                    dropDown={dropDown}
                />
            </div>
        </>
    );
}