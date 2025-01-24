import { Parallax } from "react-parallax";
import visitPhoto from '../../../assets/img/visitUs.jpg'

export default function Info() {
    return (
        <div className="pt-20 bg-gradient-to-b from-neutral-900 via-black to-black min-h-screen w-full">
            {/* Titolo */}
            <div className="font-bold font-oswald text-6xl text-white/80 h-56 uppercase flex justify-center items-center">
                Vieni a Trovarci
            </div>

            {/* Contenuto */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <Parallax
                    strength={-300}
                    bgImage={visitPhoto}
                    bgImageStyle={{
                        objectFit: 'cover',
                    }}
                >
                    <div 
                        className="h-full"
                        style={{ clipPath: 'polygon(13% 0, 100% 0, 87% 100%, 0 100%)' }}
                    ></div>
                </Parallax>

                {/* Colonna informazioni */}
                <div className="flex bg-white items-center justify-center p-8">
                    <div className="p-6 w-full max-w-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dove Siamo</h2>
                        <p className="text-gray-700">
                            📍 <strong>AutoTop Concessionaria</strong><br />
                            Via Roma 123, 00100 Roma (RM), Italia
                        </p>
                        <p className="text-gray-700 mt-4">
                            📅 <strong>Orari di apertura:</strong><br />
                            <span>Lunedì - Venerdì: 9:00 - 19:00</span><br />
                            <span>Sabato: 9:00 - 13:00</span><br />
                            <span>Domenica: Chiuso</span>
                        </p>
                        <p className="text-gray-700 mt-4">
                            📞 <strong>Contatti:</strong><br />
                            Telefono: +39 06 1234567<br />
                            Email: info@autotoproma.it
                        </p>
                        <p className="text-gray-700 mt-4">
                            🌍 <strong>Come raggiungerci:</strong><br />
                            In auto: Situata vicino all'uscita 15 del Grande Raccordo Anulare.<br />
                            In autobus: Linee 45 e 78 con fermata a 200 metri dalla nostra sede.<br />
                            In treno: A 10 minuti dalla Stazione Termini.
                        </p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 text-blue-600 hover:underline"
                        >
                            🗺️ Visualizza su Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
