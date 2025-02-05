export default function InfosBox({ icon, info, title }) {
    return (
        <div className="w-full bg-white flex flex-col items-center gap-10 p-10 aspect-square transition-shadow duration-300">
            {/* Icon */}
            <div className="text-black text-8xl">
                {icon}
            </div>
            {/* Title */}
            <h1 className="font-bold text-xl text-gray-800 text-center uppercase">
                {title}
            </h1>
            {/* Info */}
            <div className="text-gray-600 text-center w-56">
                {info}
            </div>
        </div>
    );
}
