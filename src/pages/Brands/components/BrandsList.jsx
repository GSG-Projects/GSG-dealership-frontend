import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../../store/API/Brands";
import { Link } from "react-router-dom";

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
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
                Loading...
            </span>
        );
    }
    if (status === 'failed') return <p>Error: {error}</p>;

    return(
        <>
            <div className="w-7/12 grid grid-cols-3 gap-20 m-auto py-20 h-full">
                {items.map((brand, index) => (
                    <Link 
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