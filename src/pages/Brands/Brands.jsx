import background from '../../assets/img/brands-bg.png';
import BrandsList from './components/BrandsList';
import SidePage from './components/SidePage';
export default function Brands() {  

    return(
        <>
            <div className="h-full relative bg-gradient-to-b from-neutral-950 to-neutral-900">
                <SidePage>
                    Marchi
                </SidePage>
                <BrandsList />
                <img 
                    src={background} 
                    alt="" 
                    className='top-0 left-0 w-full absolute'
                />
            </div>
        </>
    );
}