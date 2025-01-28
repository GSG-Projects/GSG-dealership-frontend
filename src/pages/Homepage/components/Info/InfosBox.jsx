export default function InfosBox({icon, info, title}) {
    return(
        <div className="w-full bg-white flex flex-col gap-5">
            <div className="text-black">
                {icon}
            </div>
            <h1 className="font-bold">
                {title}
            </h1>
            <p>
                {info}
            </p>
        </div>
    );
}