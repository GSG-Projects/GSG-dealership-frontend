import background from '../../assets/img/brands-bg.png';
import SidePage from './components/SidePage';
export default function Brands() {  


    return(
        <>
            <div className="h-screen relative bg-gradient-to-b from-neutral-950 to-neutral-900">
                <img 
                    src={background} 
                    alt="" 
                    className='absolute top-0 left-0 w-full'    
                />
                <SidePage>
                    Marchi
                </SidePage>
            </div>
        </>
    );
}