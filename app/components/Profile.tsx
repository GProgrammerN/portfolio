import Navbar from "./Navbar";

export default function Profile() {
    return (
        <div className="ml-4">
            <h1 className="font-mono overflow-hidden
            min-[425px]:border-r-4 border-r-white text-5xl text-white font-bold min-[425px]:max-w-max
            min-[425px]:whitespace-nowrap min-[425px]:animate-typing">Guilherme Nacci</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Desenvolvedor Web</h2>
            <h3 className="mt-4 max-w-xs leading-normal">Trabalho principalmente no desenvolvimento web com Next.js.</h3>
            <Navbar />
        </div>
    )
}