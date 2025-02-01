import background from '../../assets/img/brands-bg.png';
import BrandsList from './components/BrandsList';
import SidePage from './components/SidePage';

export default function Brands() {  
    return (
        <>
            <div className="h-full relative bg-neutral-950">
                <BrandsList />
                <SidePage>
                    Marchi
                </SidePage>
                <img 
                    src={background} 
                    alt="" 
                    className="absolute top-0 left-0 w-full"
                />
            </div>
        </>
    );
}
