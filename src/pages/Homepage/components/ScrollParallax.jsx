import { Parallax } from "react-parallax";
import parallaxPhoto from '../../../assets/img/parallax.jpg';
import { useState } from "react";

export default function ScrollParallax() {
    const [toRegister, setToRegister] = useState(false);

    function handleToRegister() {
        setToRegister((prev) => !prev);
    }

    return (
        <div className="overflow-hidden bg-black border-t border-b border-white">
            <Parallax
                strength={-300}
                bgImage={parallaxPhoto}
                bgImageStyle={{
                    objectFit: 'cover',
                }}
            >
                <div className="h-[800px] flex items-center justify-center flex-col gap-64 relative">
                    <div className="bg-neutral-800/20 relative border-white border backdrop-blur-md w-1/3 h-2/3 flex flex-col items-center justify-center p-8">
                            <div className={`
                                    absolute top-0 left-0 h-full scale-110 w-full flex flex-col items-center justify-center 
                                    transition-all duration-500 
                                    ${!toRegister ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                `}
                            >
                                <h1 className="text-white text-4xl font-bold mb-4 uppercase font-montserrat">
                                    Try Before You Buy
                                </h1>
                                <p className="text-white text-lg text-center mb-6 font-kanit w-2/3">
                                    Vivi un'esperienza unica con prestazioni e funzionalità straordinarie. Prenota ora il tuo test drive e scopri perché la nostra soluzione è quella giusta per te.
                                </p>
                                <button
                                    onClick={handleToRegister}
                                    className="mt-4 bg-neutral-100 hover:border-white border hover:bg-transparent hover:text-white text-neutral-950 transition-all ease-in-out duration-200 font-semibold py-2 px-6"
                                >
                                    Prenota Test Drive
                                </button>
                            </div>
                            <div
                                className={`
                                    absolute top-0 left-0 h-full w-full scale-110 flex flex-col items-center justify-center 
                                    transition-all duration-500 
                                    ${toRegister ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                                `}
                            >
                                <h1 className="text-white text-4xl font-bold mb-4 uppercase font-montserrat">
                                    Registrati ora
                                </h1>
                                <p className="text-white text-lg text-center mb-6 font-kanit w-2/3">
                                    <p>
                                        Se vuoi prenotare un Test Drive, devi prima registrarti.
                                    </p> 
                                    <p>
                                        Completa la tua registrazione per iniziare!
                                    </p>
                                </p>
                                <div className="flex gap-10">
                                    <button
                                        className="mt-4 bg-neutral-950 border hover:bg-white hover:text-neutral-950 text-white transition-all ease-in-out duration-200 font-semibold py-2 px-6"
                                    >
                                        Registrati
                                    </button>
                                    <button
                                        onClick={handleToRegister}
                                        className="mt-4 bg-neutral-100 hover:border-white border hover:bg-transparent hover:text-white text-neutral-950 transition-all ease-in-out duration-200 font-semibold py-2 px-6"
                                    >
                                        Torna indietro
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

            </Parallax>
        </div>
    );
}
