export default function ModelInfo({children, brandName, distanceCss, carInfo}) {
    return(
        <div className="mb-12">
            <h1 className={`text-4xl bg-gradient-to-r from-black to-transparent font-bold mb-2 py-2 ${distanceCss}`}>
                {children}
            </h1>
            <h2 className={`text-3xl ${distanceCss}`}>
                {   children == 'Brand' ?
                    brandName || "Loading..." 
                    :
                    carInfo || "Loading..." 
                }
            </h2>
        </div>
    );
}