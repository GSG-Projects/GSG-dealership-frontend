import Fuel from "./Filters/Fuel";
import './FilterComp.css';

export default function FilterComp() {
    return(
        <>
            <div 
                className="filter-container py-3 px-[4%] grid grid-cols-12 sticky top-0 left-0 z-20"
            >
                <Fuel />
                <div>
                </div>
            </div>
        </>
    );
}