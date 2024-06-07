export default function Navbar() {
    return (
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
    )
}