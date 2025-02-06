export default function ListDropDown({children}) {
    return(
        <>
            <li className="px-3 py-2 bg-gradient-to-b from-neutral-950 to-neutral-800 text-white gap-2 hover:from-neutral-300 hover:to-neutral-50 hover:text-neutral-950 cursor-pointer transition-all ease-in-out duration-500">
                    <p>
                        {children}
                    </p>
                </li>
        </>
    );
}