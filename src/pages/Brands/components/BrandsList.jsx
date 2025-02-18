import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../../store/API/Brands";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function SingleBrand() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.brands);
    
    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchBrands());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
            <div className="w-7/12 grid grid-cols-3 gap-20 m-auto py-20 h-full">
                    {Array.from({ length: 9 }, (_, index) => (
                    <div
                        className="aspect-video bg-black/50 border border-white flex gap-7 flex-col justify-center items-center py-28 backdrop:blur-md z-10 hover:bg-white/20 hover:scale-105 transition-all ease-in-out duration-300 shadow-sm hover:shadow-xl"
                    >
                        <div className="w-9">
                            <Loading />
                        </div>
                    </div>
                ))}
            </div>
        );


    }
    if (status === 'failed') {
        return(
            <>
                <div className="py-28 relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-neutral-900">
                    <div className="uppercase gap-4 text-neutral-50 p-24 text-center font-kanit flex w-fit mx-auto flex-col items-center justify-center">
                        <p className="text-7xl font-bold flex gap-10">
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                            />
                            <span>
                                ERROR 401
                            </span>
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                            />
                        </p>
                        <p className="text-4xl font-semibold">
                            {error}
                        </p>
                    </div>
                </div>
            </>
        );
    };

    return(
        <>
            <div className="w-7/12 grid grid-cols-3 gap-20 m-auto py-20 h-full">
                {items.map((brand, index) => (
                    <Link
                        key={index}
                        to={`${brand.id}`}
                        className="bg-black/50 border border-white h-auto flex gap-7 flex-col justify-center items-center py-10 backdrop:blur-md z-10 hover:bg-white/20 hover:scale-105 transition-all ease-in-out duration-300 shadow-sm hover:shadow-xl">
                            <img 
                                className="h-32 object-contain max-w-48 aspect-auto mx-4"
                                key={index} 
                                src={brand.image} 
                                alt={brand.name} 
                            />
                            <h1 className="text-white text-xl font-kanit">
                                {brand.name}
                            </h1>
                    </Link>
                ))}
            </div>
        </>
    );
}