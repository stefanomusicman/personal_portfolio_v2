import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from './SectionLayout';

const Projects = () => {
    return (
        <SectionLayout title='Projects'>
            {/* Grid */}
            <div className=" grid gap-5 lg:grid-cols-2 lg:w-full lg:gap-10">
                {projectInfo.map((item) =>
                    <ProjectCard
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        showDemoLink={item.showDemoLink}
                        showCodeLink={item.showCodeLink}
                        demoLink={item.demoLink}
                        codeLink={item.codeLink} />)}
            </div>
        </SectionLayout>
    );
}

export default Projects;

//-------------------------------------------------------------------------

const ProjectCard: React.FC<CardInfo> = ({ title, img, description, showDemoLink, showCodeLink, demoLink, codeLink }) => {
    return (
        <div className="p-px bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl">
            <div className="
                h-full 
                w-full 
                bg-[#060b1b]
                p-4
                flex
                flex-col
                items-center
                justify-center
                rounded-3xl">
                <div className='w-11/12 flex flex-col justify-center items-start'>
                    <Image className='pt-6' alt='image' src={`${img}`} width={610} height={500} />
                    <h1 className='py-12 w-full text-2xl font-bold'>{title}</h1>
                    <p className="text-slate-400 text-sm lg:text-lg">{description}</p>
                    <div className='w-full pt-12 pb-6 flex justify-evenly items-center'>
                        {showDemoLink && <Link target='_blank' href={`${demoLink}`}>
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
                        </Link>}
                        {showCodeLink && <Link target='_blank' href={`${codeLink}`}>
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
                        </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}

type CardInfo = {
    title: String,
    img: String,
    description: String,
    showDemoLink: Boolean,
    showCodeLink: Boolean,
    demoLink: String,
    codeLink: String,
}

const projectInfo: CardInfo[] = [
    {
        title: 'BarBeat',
        img: '/barbeat.png',
        description: 'Mobile application allowing users to discover new cocktails. Built with Flutter, Firebase and Rive.',
        showDemoLink: true,
        showCodeLink: false,
        demoLink: 'https://barbeat.net/',
        codeLink: '',
    },
    {
        title: 'Half Caf Blog',
        img: '/half_caf_blog.png',
        description: 'Blog site intended to be a one stop shop for MTL cafés. Built with Next.js + Typescript, strapi.io and Firebase.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://www.halfcafblog.com/',
        codeLink: 'https://github.com/stefanomusicman/half-caf-blog',
    },
    {
        title: 'Personal Portfolio',
        img: '/personal_portfolio_2.png',
        description: 'Portfolio site intended to demonstrate my technical abilities. Built with Next.js + Typescript and Tailwind CSS.',
        showDemoLink: false,
        showCodeLink: true,
        demoLink: '',
        codeLink: 'https://github.com/stefanomusicman/personal_portfolio_v2',
    },
    {
        title: 'Food Order App',
        img: '/food_order_app.png',
        description: 'Built with React, CSS modules and React Router.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://food-order-app-d8cc7.web.app/',
        codeLink: 'https://github.com/stefanomusicman/food-order-app',
    }
]