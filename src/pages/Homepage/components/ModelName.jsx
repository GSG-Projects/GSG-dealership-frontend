export default function ModelName({filteredModels, currentIndex,}) {
    return(
        <div 
            className="bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 -translate-x-1/2 py-8 w-1/4 outline-1 outline-white absolute bottom-0 left-1/2 z-30 text-center"
            style={{
                clipPath: 'polygon(13% 0, 87% 0, 100% 100%, 0 100%)',
                border: '1px solid white'
            }}
        >
            <h1 className="uppercase font-bold w-full text-white font-sans">
                Modelli più richiesti
            </h1>
            {filteredModels.length > 0 && (
                <p
                    className="model-name uppercase text-white w-full font-bold text-6xl font-oswald"
                >
                    {filteredModels[currentIndex]?.name}
                </p>
            )}
        </div>
    );
}