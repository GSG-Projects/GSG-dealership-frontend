export default function ButtonModels({children, handleButtonClick, currentIndex, index }) {

    return(
        <button
        className={`w-14 aspect-square absolute top-10 bg-black z-20 left-40 transition-all ease-in-out duration-300 text-neutral-300 hover:bg-white hover:text-black ${index === currentIndex ? '' : 'hidden'}`}
        style={{ 
            clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        }}
        onClick={() => handleButtonClick(index)}
    >
        {children}
    </button>
    );
}