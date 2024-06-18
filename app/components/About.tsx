import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations('main-content')

    return (
        <span className="leading-normal max-w-xs md:max-w-none">
            <p>{t('about')}</p>
            <p className="mt-4 mb-16">
                {t('about-2')}
            </p>
        </span>
    )
}