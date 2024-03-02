'use client';
import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from './SectionLayout';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Register the Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    return (
        <SectionLayout id='Projects' title='Projects'>
            {/* Grid */}
            <div className=" grid gap-5 lg:grid-cols-2 lg:w-full lg:gap-10">
                {projectInfo.map((item) =>
                    <ProjectCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        tech={item.tech}
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

const ProjectCard: React.FC<CardInfo> = ({ id, title, img, tech, description, showDemoLink, showCodeLink, demoLink, codeLink }) => {
    const cardRef: any = useRef();

    useEffect(() => {
        const card = cardRef.current;
        gsap.fromTo(card, { opacity: 0, translateY: 100 }, {
            opacity: 1, translateY: 0, duration: 1.2, scrollTrigger: {
                trigger: card,
            }
        })
    }, []);

    return (
        <div ref={cardRef} key={id} className="p-px bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl">
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
                    <h1 className='pt-6 w-full text-2xl font-bold'>{title}</h1>
                    <div className='w-full flex justify-start items-center h-24'>
                        <p className="text-slate-400 text-sm lg:text-lg">{description}</p>
                    </div>
                    <div className='w-full flex flex-col justify-center items-start'>
                        <h3 className='text-xl pb-2'>Tech Used</h3>
                        <p className="text-slate-400 text-sm lg:text-lg">{tech}</p>
                    </div>
                    <div className='w-full pt-12 pb-6 flex justify-evenly items-center'>
                        {showDemoLink && <Link target='_blank' href={`${demoLink}`}>
                            <button className="
                                rounded-full
                                bg-gradient-to-r from-blue-500 to-green-500
                                px-4
                                py-4
                                text-xs
                                xs:px-5
                                xs:text-sm
                                md:px-10
                                md:py-5
                                ">
                                Live Preview
                            </button>
                        </Link>}
                        {showCodeLink && <Link target='_blank' href={`${codeLink}`}>
                            <button className="
                                rounded-full
                                px-5
                                py-3
                                text-xs
                                xs:text-sm
                                md:px-10
                                md:py-4
                                border-2
                                border-white
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
    id: number,
    title: String,
    img: String,
    tech: String,
    description: String,
    showDemoLink: Boolean,
    showCodeLink: Boolean,
    demoLink: String,
    codeLink: String,
}

const projectInfo: CardInfo[] = [
    {
        id: 1,
        title: 'BarBeat',
        img: '/barbeat.png',
        tech: 'Flutter, Firebase and Rive',
        description: 'Mobile application allowing users to discover new cocktails. Built with a team, available on the App Store and Google Play Store. Private repository',
        showDemoLink: true,
        showCodeLink: false,
        demoLink: 'https://barbeat.net/',
        codeLink: '',
    },
    {
        id: 2,
        title: 'Guitar Directory',
        img: '/guitar_directory.png',
        tech: 'Next.js + TS, Flask, Firebase, MUI, MongoDB',
        description: 'Application that interacts with a custom API as well as provides authentication to allow users to store favorites.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://guitar-frontend.vercel.app',
        codeLink: 'https://github.com/stefanomusicman/guitar_frontend',
    },
    {
        id: 3,
        title: 'Half Caf Blog',
        img: '/half_caf_blog.png',
        tech: 'Next.js + Typescript, strapi.io and Firebase',
        description: 'Blog site intended to be a one stop shop for MTL cafés.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://www.halfcafblog.com/',
        codeLink: 'https://github.com/stefanomusicman/half-caf-blog',
    },
    {
        id: 4,
        title: 'Personal Portfolio',
        img: '/personal_portfolio_2.png',
        tech: 'Next.js + Typescript, Tailwind CSS and GSAP',
        description: 'Portfolio site intended to demonstrate my technical abilities.',
        showDemoLink: false,
        showCodeLink: true,
        demoLink: '',
        codeLink: 'https://github.com/stefanomusicman/personal_portfolio_v2',
    },
]