export default function ListDropDown({ children, fuel, cilindrata, isSelected, onSingleSelect, onMultipleSelect }) {
    return (
        <li 
            onClick={fuel ? onMultipleSelect : onSingleSelect} 
            className={`px-3 py-2 gap-2 cursor-pointer transition-all ease-in-out duration-500 
                ${isSelected ? 'bg-gradient-to-b from-neutral-300 to-neutral-50 text-black' : 'bg-gradient-to-b from-neutral-950 to-neutral-800 text-white hover:from-neutral-600 hover:to-neutral-500'}
            `}
        >
            <button>{children}</button>
        </li>
    );
}
