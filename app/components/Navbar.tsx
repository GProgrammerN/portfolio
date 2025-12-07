import { useTranslations } from "next-intl"

export default function Navbar() {
    const t = useTranslations('header')
    return (
        <nav className="hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
                <li>
                    <span className="hover:text-lg hover:text-white">
                        <a href="#about" className="flex items-center my-3">
                            {t('profile.navbar.about')}
                        </a>
                    </span>
                </li>
                <li>
                    <span className="hover:text-lg hover:text-white">
                        <a href="#experience" className="flex items-center my-3">
                            {t('profile.navbar.experience')}
                        </a>
                    </span>
                </li>
                <li>
                    <span className="hover:text-lg hover:text-white">
                        <a href="#project" className="flex items-center my-3">
                            {t('profile.navbar.project')}
                        </a>
                    </span>
                </li>
                <li>
                    <span className="hover:text-lg hover:text-white">
                        <a href="#skills" className="flex items-center my-3">
                            {t('profile.navbar.skills')}
                        </a>
                    </span>
                </li>
                <li>
                    <span className="hover:text-lg hover:text-white">
                        <a href="#education" className="flex items-center my-3">
                            {t('profile.navbar.education')}
                        </a>
                    </span>
                </li>
            </ul>
        </nav>
    )
}