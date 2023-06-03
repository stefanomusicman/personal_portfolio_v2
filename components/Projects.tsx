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

const ProjectCard: React.FC<CardInfo> = ({ id, title, img, description, showDemoLink, showCodeLink, demoLink, codeLink }) => {
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
                    <h1 className='py-12 w-full text-2xl font-bold'>{title}</h1>
                    <div className='w-full flex justify-start items-center h-24'>
                        <p className="text-slate-400 text-sm lg:text-lg">{description}</p>
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
        description: 'Mobile application allowing users to discover new cocktails. Built with Flutter, Firebase and Rive. *Built with a team, currently in closed testing. Private repository',
        showDemoLink: true,
        showCodeLink: false,
        demoLink: 'https://barbeat.net/',
        codeLink: '',
    },
    {
        id: 2,
        title: 'Half Caf Blog',
        img: '/half_caf_blog.png',
        description: 'Blog site intended to be a one stop shop for MTL cafés. Built with Next.js + Typescript, strapi.io and Firebase.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://www.halfcafblog.com/',
        codeLink: 'https://github.com/stefanomusicman/half-caf-blog',
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        img: '/personal_portfolio_2.png',
        description: 'Portfolio site intended to demonstrate my technical abilities. Built with Next.js + Typescript, Tailwind CSS and GSAP.',
        showDemoLink: false,
        showCodeLink: true,
        demoLink: '',
        codeLink: 'https://github.com/stefanomusicman/personal_portfolio_v2',
    },
    {
        id: 4,
        title: 'Weather App',
        img: '/weather_app.png',
        description: 'PWA built with Next.js + Typescript which interacts with a third party API to retrieve data.',
        showDemoLink: true,
        showCodeLink: true,
        demoLink: 'https://food-order-app-d8cc7.web.app/',
        codeLink: 'https://github.com/stefanomusicman/food-order-app',
    }
]