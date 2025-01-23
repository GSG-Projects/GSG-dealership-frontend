import { Parallax } from "react-parallax";
import parallaxPhoto from '../../../assets/img/parallax.jpg';

export default function ScrollParallax() {
    return (
        <div className="overflow-hidden bg-black">
            <Parallax
                strength={-300}
                bgImage={parallaxPhoto}
                bgImageStyle={{
                    objectFit: 'cover',
                }}
            >
                <div className="h-[800px] flex items-center justify-center gap-64">
                    <div className="bg-neutral-800/20 border-white border backdrop-blur-md w-1/3 h-2/3 flex flex-col items-center justify-center p-8">
                        <h1 className="text-white text-4xl font-bold mb-4 uppercase font-montserrat">
                            Try Before You Buy
                        </h1>
                        <p className="text-white text-lg text-center mb-6 font-kanit">
                            Vivi un'esperienza unica con prestazioni e funzionalità straordinarie. Prenota ora il tuo test drive e scopri perché la nostra soluzione è quella giusta per te.
                        </p>
                        <button className="mt-4 bg-neutral-100 hover:border-white border hover:bg-transparent hover:text-white text-neutral-950 transition-all ease-in-out duration-200 font-semibold py-2 px-6">
                            Prenota Test Drive
                        </button>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}
