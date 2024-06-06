import Project from "./Project";

export default function MainContent() {
    return (
        <main>
            <span id="about" className="leading-normal max-w-xs md:max-w-none">
                <p>Sempre tive interesse na área da tecnologia, mexendo com criação de servidores de jogos durante a adolescência. Cheguei a fazer alguns sobre Python e a tríade web na época do ensino médio, acabando não dando sequência.</p>
                <p className="mt-4 mb-16">
                    Mas foi em 2023 que, meu pai, ex-programador (atualmente advogado) teve a ideia de iniciar o projeto de um <a href="https://sistemaexecucaopenal.vercel.app/" target="_blank" rel="noreferrer" className="font-bold text-white hover:text-teal-300 focus-visible:text-teal-300">micro SaaS (Software como Serviço)</a> voltado para advogados criminalistas. E foi a partir desse projeto que comecei a evoluir muito como programador. Desde então, venho focando todos os meus esforços para me aprimorar na área.
                </p>
            </span>
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
            <h1 className="mb-2 text-2xl font-light select-none">Educação</h1>
            <div>
                <h4 id="education" className="font-semibold text-xl"><span className="text-white">Análise e Desenvolvimento de Sistemas</span> - IFSP (Capivari)</h4>
                <p><span className="font-bold">Curso Superior</span></p>
                <p><span className="font-medium">Início: 01/2023</span></p>
                <p><span className="font-medium">Previsão de Conclusão: 12/2025</span></p>
            </div>
        </main>
    )
}