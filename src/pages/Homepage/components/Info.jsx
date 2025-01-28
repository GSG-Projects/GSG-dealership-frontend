import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import InfosBox from "./Info/InfosBox";

export default function Info() {
    return (
        <div className="pt-20 bg-gradient-to-b from-neutral-900 via-black to-black min-h-screen w-full">
            {/* Titolo */}
            <div className="font-bold font-oswald text-6xl mb-20 text-white/80 h-56 uppercase flex justify-center items-center">
                Contattaci
            </div>
            {/* Infos */}
            <div className="flex gap-24 w-3/4 mx-auto">
                <InfosBox
                    icon={<FontAwesomeIcon icon={faLocationDot}/>}
                    title={"LA NOSTRA SEDE"}
                    info={"Via Rossi 123, Milano, Italia"} 
                />
                 <InfosBox
                    icon={<FontAwesomeIcon icon={faPhone}/>}
                    title={"NUMERO DI TELEFONO"}
                    info={"Vendite: +39 02-1234-5678 Assistenza: +39 02-8765-4321"} 
                />
                 <InfosBox
                    icon={<FontAwesomeIcon icon={faClock}/>}
                    title={"ORARI"}
                    info={                        
                        <>
                            <p>
                                Lunedì-Venerdì: 9:00 - 18:00
                            </p>
                            <p>
                                Sabato: 9:00 - 13:00
                            </p>
                            <p>
                                Domenica: Chiuso
                            </p>
                        </>
                    } 
                />
                 <InfosBox
                    icon={<FontAwesomeIcon icon={faEnvelope}/>}
                    title={"E-MAIL"}
                    info={"info@gsgautomobili.it, assistenza@gsgautomobili.it."} 
                />
            </div>
        </div>
    );
}
