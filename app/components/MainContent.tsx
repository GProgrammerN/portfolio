import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";

export default function MainContent() {
    return (
        <main>
            <About />
            <h1 id="project" className="mb-2 text-2xl font-light select-none">Projetos</h1>
            <Project title="Sistema de Execução Penal" description="Auxiliar advogados em seus cálculos de execução penal, os permitindo gerenciar seus clientes."
                stack={["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Stripe", "Resend"]}
                code="https://github.com/GProgrammerN/sistemaexecucaopenal"
                deploy="https://sistemaexecucaopenal.vercel.app/"
                image="/sistemaexecucaopenal.png" />
            <Project title="Portfólio" description="O código desse portfólio."
                stack={["Next.js", "TypeScript", "Tailwind CSS"]}
                code="https://github.com/GProgrammerN/portfolio"
                image="/portfolio.png" />
            <h1 id="skills" className="mb-2 text-2xl font-light select-none">Habilidades</h1>
            <Skills />
            <h1 id="education" className="mb-2 text-2xl font-light select-none">Educação</h1>
            <Education />
        </main>
    )
}