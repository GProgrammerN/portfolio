import About from "./About";
import Education from "./Education";
import Project from "./Project";

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
            <div className="flex flex-col">
                <div className="flex gap-2 mb-2">
                    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextJS" />
                    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                </div>
                <div className="flex gap-2 mb-2">
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="React" />
                </div>
                <div className="flex gap-2 mb-4">
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                </div>
            </div>
            <h1 id="education" className="mb-2 text-2xl font-light select-none">Educação</h1>
            <Education />
        </main>
    )
}