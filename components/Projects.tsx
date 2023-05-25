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
            w-11/12
            flex
            flex-col
            items-center
            md:items-start
            lg:w-full">
            <div className='w-full flex justify-start'>
                <h1 className="font-bold mb-4 md:mb-14 lg:text-5xl">Projects</h1>
            </div>
            {/* Grid */}
            <div className=" grid gap-5 lg:grid-cols-2 lg:w-full lg:gap-10">
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
                    <Image className='pt-6' alt='image' src='/barbeat.png' width={610} height={500} />
                    <h1 className='py-12 w-full text-2xl font-bold'>BarBeat</h1>
                    <p className="text-slate-400 text-sm lg:text-lg">Mobile application allowing users to discover new cocktails. Built with Flutter, Firebase and Rive.</p>
                    <div className='w-full pt-12 pb-6 flex justify-evenly items-center'>
                        <button className="
                            rounded-full
                            bg-gradient-to-r from-blue-500 to-green-500
                            px-5
                            py-4
                            md:px-10
                            md:py-5
                            text-sm
                        ">
                            Live Preview
                        </button>
                        <button className="
                            rounded-full
                            px-5
                            py-3
                            md:px-10
                            md:py-4
                            border-2
                            border-white
                            text-sm
                        ">
                            Check on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}