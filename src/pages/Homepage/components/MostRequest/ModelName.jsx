export default function ModelName({filteredModels, currentIndex, index}) {
    return(
        <div 
            className={`bg-gradient-to-r from-neutral-900/90 via-neutral-800/90 to-neutral-900/90 py-8 outline-1 outline-white absolute bottom-0 right-[10%] z-30 text-center transition-all ease-in-out duration-200 
                ${currentIndex === index ? 'w-5/12 opacity-100' : 'w-0 opacity-0'}`
            }
            style={{
                clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                border: '1px solid white'
            }}
        >
            {filteredModels.length > 0 && (
                <p
                    className="uppercase italic text-white w-full font-bold text-6xl font-oswald"
                >
                    {filteredModels[currentIndex]?.name}
                </p>
            )}
        </div>
    );
}