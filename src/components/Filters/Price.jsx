import RangeBox from "./RangeBox";

export default function Price({ dropDown }) {
    return (
        <>
            <div className={`absolute -left-2/2 top-[3.9rem] transition-all ease-in-out duration-300 z-50`}>
                <RangeBox 
                    dropDown={dropDown} 
                    filterType={1}
                />
            </div>
        </>
    );
}
