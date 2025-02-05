export default function CarInfo({ children, info, isFirst, isPrice }) {
    return (
        <li 
            className={`bg-gradient-to-r from-neutral-900 to-neutral-600/70  flex justify-center flex-col relative
                ${isFirst ? 'px-10' : 'px-16'}
            `}
            style={{ 
                width: '111%',
                clipPath: isFirst ? 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' : 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
            }}
        >
            <span className="uppercase font-bold">
                {children}
            </span> 
            <div className="flex gap-1">
                {
                    isPrice && <span>€ </span> 
                }
                {info}
            </div>
        </li>
    );
}