import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Fuel from "./Fuel";
import Price from "./Price";

export default function SingleFilter({children, fuel, price}) {
    const [dropDown, setDropDown] = useState(false);

    function handleDropDown() {
        setDropDown(prev => !prev);
    }

    return(
        <>
            <div className="w-full relative">
                <div
                    onClick={handleDropDown}
                    className="uppercase font-bold flex items-center gap-3 w-2/3 cursor-pointer"
                >
                    {children}
                    <FontAwesomeIcon
                        className={`size-3 transition-transform ease-in-out duration-300 ${dropDown ? 'rotate-90' : 'rotate-0'}`}
                        icon={faChevronRight}
                    />
                </div>
                { fuel &&
                    <Fuel
                        dropDown={dropDown}
                    />
                }
                { price &&
                    <Price
                        dropDown={dropDown}
                    />
                }
            </div>
        </>
    );
}