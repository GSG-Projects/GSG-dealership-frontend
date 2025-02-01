import { useState } from "react";

export default function SidePage({children, path}) {
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick((prev) => !prev);
    }

    return(
        <>
            <div 
                to={path}
                className='absolute left-0 top-16 z-40 px-20 py-8 bg-black/15 border w-[25rem] hover:w-[27rem] border-white border-l-0 transition-all ease-in-out duration-300 cursor-pointer hover:bg-white/10'
                onClick={handleClick}
                style={{
                    clipPath: click ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 87% 100%, 0 100%)',
                }}
            >
                <div 
                    className="uppercase text-white font-bold w-full text-5xl font-montserrat"
                >
                    {children}
                </div>
            </div>
        </>
    );
}