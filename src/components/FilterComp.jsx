import Fuel from "./Filters/Fuel";
import './FilterComp.css';
import SingleFilter from './Filters/SingleFilter';

export default function FilterComp() {
    return(
        <>
            <div 
                className="filter-container py-5 px-[4%] grid grid-cols-12 sticky top-0 left-0 z-20"
            >
                <SingleFilter
                    fuel={true}
                >
                    Alimentazione
                </SingleFilter>  
                <SingleFilter
                    cilindrata={true}
                >
                    Cilindrata
                </SingleFilter>  
                <SingleFilter
                    power={true}
                >
                    Potenza
                </SingleFilter>  
                <SingleFilter
                    price={true}
                >
                    Prezzo
                </SingleFilter>  
            </div>
        </>
    );
}