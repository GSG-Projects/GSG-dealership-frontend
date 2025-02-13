import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Fuel from "./Fuel";
import Price from "./Price";
import Cilindrata from "./Cilindrata";
import Power from "./Power";

export default function SingleFilter({children, fuel, price, cilindrata, power}) {
    const [dropDown, setDropDown] = useState(false);

    function handleDropDown() {
        setDropDown(prev => !prev);
    }

    return(
        <>
            <div className="w-full relative">
                <button
                    onClick={handleDropDown}
                    className="uppercase font-bold flex items-center gap-3 w-2/3 cursor-pointer"
                >
                    {children}
                    <FontAwesomeIcon
                        className={`size-3 transition-transform ease-in-out duration-300 ${dropDown ? 'rotate-90' : 'rotate-0'}`}
                        icon={faChevronRight}
                    />
                </button>
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
                { cilindrata &&
                    <Cilindrata
                        dropDown={dropDown}
                    />
                }

                { power &&
                    <Power
                        dropDown={dropDown}
                    />
                }
            </div>
        </>
    );
}