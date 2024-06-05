export default function Profile() {
    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Guilherme Nacci</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Desenvolvedor Web</h2>
            <h3 className="mt-4 max-w-xs leading-normal">Trabalho principalmente no desenvolvimento web com Next.js.</h3>
            <nav className="hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    <li>
                        <span className="hover:text-lg hover:text-white">
                            <a href="#about" className="flex items-center py-3">
                                Sobre
                            </a>
                        </span>
                    </li>
                    <li>
                        <span className="hover:text-lg hover:text-white">
                            <a href="#project" className="flex items-center py-3">
                                Projetos
                            </a>
                        </span>
                    </li>
                    <li>
                        <span className="hover:text-lg hover:text-white">
                            <a href="#education" className="flex items-center py-3">
                                Educação
                            </a>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}