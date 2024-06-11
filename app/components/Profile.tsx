import Navbar from "./Navbar";

export default function Profile() {
    return (
        <div className="">
            <h1 className="font-mono overflow-hidden
            tracking-tight sm:text-5xl
            min-[425px]:border-r-4 border-r-white text-4xl text-white font-extrabold min-[425px]:max-w-max
            min-[425px]:whitespace-nowrap min-[425px]:animate-typing">
                <span className="xl:flex">
                    Guilherme H.
                </span>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Desenvolvedor Web</h2>
            <h3 className="mt-4 sm:max-w-xs leading-normal">Trabalho principalmente no desenvolvimento web com Next.js.</h3>
            <Navbar />
        </div>
    )
}