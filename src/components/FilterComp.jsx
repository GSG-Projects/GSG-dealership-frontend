import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FilterComp.css';
import SingleFilter from './Filters/SingleFilter';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FilterComp() {
    return(
        <>
            <div 
                className="filter-container py-5 px-[4%] grid grid-cols-11 sticky top-0 left-0 z-20"
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
                    cambio={true}
                >
                    Cambio
                </SingleFilter>   
                <SingleFilter
                    price={true}
                >
                    Prezzo
                </SingleFilter>  
                <div className='flex gap-5 justify-center'>
                    <button type='submit' className='bg-black hover:bg-neutral-900 transition-all ease-in-out duration-300 text-white px-6 uppercase font-kanit py-1'>
                        Reset   
                    </button>
                    <button type='reset' className='bg-white hover:bg-neutral-100 transition-all ease-in-out duration-300 border border-black px-6 py-1 font-kanit uppercase'>
                        Cerca
                    </button>
                </div>
                <div className='col-span-5 w-10/12 mx-auto'>
                    <div className='w-full flex justify-center items-center bg-white border border-gray-300 rounded-full shadow-md'>
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className="text-neutral-500 ml-4 text-lg"
                        />
                        <input 
                            type="search" 
                            className='w-full py-2 px-4 text-gray-700 rounded-full focus:outline-none' 
                            placeholder="Cerca..."
                        />
                    </div>
                </div>
            </div>
        </>
    );
}