import Fuel from "./Filters/Fuel";

export default function FilterComp() {
    return(
        <>
            <div 
                className="bg-neutral-300 border border-white sticky z-20 shadow-md left-0 top-0 h-auto w-full grid grid-cols-12 px-[4%] font-kanit py-3 overflow-visible"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)', }}
            >
                <Fuel />
                <div>
                </div>
            </div>
        </>
    );
}