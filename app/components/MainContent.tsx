import { useTranslations } from "next-intl";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";

export default function MainContent() {
    const ta = useTranslations('header')
    const td = useTranslations('main-content')
    return (
        <main>
            <About />
            <h1 id="project" className="mb-2 text-2xl font-light select-none">{ta('profile.navbar.project')}</h1>
            <Project title={td('project.01.title')} description={td('project.01.description')}
                stack={["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Stripe", "Resend"]}
                code="https://github.com/GProgrammerN/sistemaexecucaopenal"
                deploy="https://sistemaexecucaopenal.vercel.app/"
                image="/sistemaexecucaopenal.png"
                access={td('project.access')}
                codeMessage={td('project.code')}
                function={td('project.function')} />
            <Project title={td('project.02.title')} description={td('project.02.description')}
                stack={["Next.js", "TypeScript", "Tailwind CSS"]}
                code="https://github.com/GProgrammerN/portfolio"
                image="/portfolio.png"
                codeMessage={td('project.code')}
                function={td('project.function')} />
            <h1 id="skills" className="mb-2 text-2xl font-light select-none">{ta('profile.navbar.skills')}</h1>
            <Skills />
            <h1 id="education" className="mt-8 mb-2 text-2xl font-light select-none">{ta('profile.navbar.education')}</h1>
            <Education />
        </main>
    )
}