export default function TransparentButton({children, link}) {
    return(
        <button
            className="mt-4 bg-black/50 border border-white hover:bg-white hover:text-neutral-950 text-white transition-all ease-in-out duration-200 font-semibold py-2 px-6"
        >
            {children}
        </button>
    );
}