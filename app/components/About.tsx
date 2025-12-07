import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations('main-content')

    return (
        <span className="leading-normal max-w-xs md:max-w-none">
            <h1 className="mt-8 mb-2 text-2xl font-light select-none">{t('title')}</h1>

            <p className="mb-16">{t('about')}</p>
        </span>
    )
}