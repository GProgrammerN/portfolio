import Image from 'next/image'

interface ProjectProps {
    title: string,
    description: string,
    image: string,
    stack: Array<String>
    deploy?: string,
    code: string,
    function: string,
    codeMessage: string,
    access?: string,
}

export default function Project(props: ProjectProps) {
    return (
        <section className="mb-8 pb-4 border-white/10 border-b-2">
            <div className="select-none p-2 hover:bg-white/10 rounded-md">
                <h4 className="font-bold text-xl">{props.title}</h4>
                <Image height={400} width={600} alt='' src={props.image} />
                <p>
                    <span className="font-semibold">{props.function}</span> {props.description}
                </p>
                <ul className="flex flex-wrap">
                    {props.stack.map((item, index) => (
                        <li key={index} className="mr-1.5 mt-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                {item}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center sm:justify-start">
                {props.deploy && (
                    <button className="mt-3 rounded-full mr-2 bg-teal-400 hover:bg-teal-600 px-8 py-2 text-xs font-medium leading-5 text-teal-900 hover:text-teal-950">
                        <a href={`${props.deploy}`} target="_blank" rel="noreferrer">
                            {props.access}
                        </a>
                    </button>
                )}
                <button className="mt-3 rounded-full bg-violet-400 hover:bg-violet-600 px-8 py-2 text-xs font-medium leading-5 text-white hover:text-black">
                    <a href={`${props.code}`} target="_blank" rel="noreferrer">
                        {props.codeMessage}
                    </a>
                </button>
            </div>
        </section>
    )
}