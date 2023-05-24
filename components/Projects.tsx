import Image from 'next/image';
type CardInfo = {
    img: String,
    title: String,
    description: String,
    showDemoLink: Boolean,
    showCodeLink: Boolean,
    demoLink: String,
    codeLink: String,
}

const Projects = () => {
    return (
        <div className="
            flex
            flex-col
            items-start
            lg:w-full">
            <h1 className="font-bold mb-14 lg:text-5xl">Projects</h1>
            {/* Grid */}
            <div className="w-11/12 grid lg:grid-cols-2 lg:w-full lg:gap-4">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
}

export default Projects;

//-------------------------------------------------------------------------

const ProjectCard = () => {
    return (
        <div className="p-px bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
            <div className="
                h-full 
                w-full 
                bg-[#060b1b]
                p-4
                flex
                flex-col
                items-center
                justify-center
                rounded-lg">
                <div className='w-11/12 flex flex-col justify-center items-center'>
                    <Image alt='image' src='/barbeat.png' width={600} height={500} />
                    <div className='py-4 w-full flex justify-start'>
                        <h1>hello world</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}