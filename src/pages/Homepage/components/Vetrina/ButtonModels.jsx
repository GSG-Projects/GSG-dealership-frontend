export default function ButtonModels({children, handleButtonClick, currentIndex, index, buttonClickStates }) {

    return(
        <button
        className={`aspect-square absolute top-10 bg-black z-20 left-48 transition-all ease-in-out duration-300 text-neutral-300  hover:text-black 
            ${index === currentIndex ? 'w-14 opacity-100' : 'w-0 opacity-0'}
            ${buttonClickStates[index] ? 'rotate-180 bg-white hover:bg-neutral-300' : 'bg-black hover:bg-neutral-900'}`}
        style={{ 
            clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        }}
        onClick={() => handleButtonClick(index)}
    >
        {children}
    </button>
    );
}