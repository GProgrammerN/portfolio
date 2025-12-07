import { useTranslations } from "next-intl";

export default function WorkExperience() {
    const t = useTranslations('work')
    const ids = ["01"]

    return (
        <div className="flex flex-col">
            {ids.map((id) => (
                <div key={id} className="mb-4 p-4 border border-white/10 rounded-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-medium">{t(`items.${id}.role`)}</h3>
                            <p className="text-sm text-white/70">{t(`items.${id}.company`)}</p>
                        </div>
                        <div className="text-sm text-white/60">{t(`items.${id}.period`)}</div>
                    </div>
                    <p className="mt-2 text-sm text-white/80">{t(`items.${id}.description`)}</p>
                </div>
            ))}
        </div>
    )
}
