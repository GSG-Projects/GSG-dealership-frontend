export default function TransparentButton({children, link}) {
    return(
        <button
            onClick={link}
            className="mt-4 bg-neutral-100 hover:border-white border hover:bg-transparent hover:text-white text-neutral-950 transition-all ease-in-out duration-200 font-semibold py-2 px-6"
        >
            {children}
        </button>
    );
}