import { useTranslations } from "next-intl"

export default function Education() {
    const t = useTranslations('main-content.education')
    return (
        <div>
            <h4 className="font-semibold text-xl"><span className="text-white">{t('title')}</span> - IFSP (Capivari)</h4>
            <p><span className="font-bold">{t('level')}</span></p>
            <p><span className="font-medium">{t('start-date-message')} 01/2023</span></p>
            <p><span className="font-medium">{t('end-date-message')} 12/2025</span></p>
        </div>
    )
}