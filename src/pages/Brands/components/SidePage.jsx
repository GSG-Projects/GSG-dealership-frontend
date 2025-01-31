import { useState } from "react";

export default function SidePage({children}) {
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick((prev) => !prev);
    }

    return(
        <div 
            className='absolute left-0 top-16 px-20 py-8 bg-black/15 border border-white w-auto border-l-0 transition-all ease-in-out duration-300 cursor-pointer'
            onClick={handleClick}
            style={{
                clipPath: click ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 87% 100%, 0 100%)',
            }}
        >
            <span className="uppercase text-white font-bold text-5xl font-montserrat">
                {children}
            </span>
        </div>
    );
}