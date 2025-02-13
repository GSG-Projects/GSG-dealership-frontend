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
                <div className='flex gap-5'>
                    <button type='submit' className='bg-black hover:bg-neutral-900 transition-all ease-in-out duration-300 text-white px-6 uppercase font-kanit py-1'>
                        Reset   
                    </button>
                    <button type='reset' className='bg-white hover:bg-neutral-100 transition-all ease-in-out duration-300 border border-black px-6 py-1 font-kanit uppercase'>
                        Cerca
                    </button>
                </div>
            </div>
        </>
    );
}