'use client';
import React, { ReactNode, useEffect, useRef, useState } from "react";
import SectionLayout from "./SectionLayout";
// --------- Languages Icons ---------------
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiPython } from "react-icons/si";
import { SiHtml5 } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { SiCss3 } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
// --------- Frameworks Icons ---------------
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiFlask } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiTailwindcss } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
// ----------- Database Icons ---------------
import { SiOracle } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
// ----------- Tools Icons ------------------
import { BsGit } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiJira } from 'react-icons/si';
// ------------ GSAP ------------------------
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Tech = () => {
    const iconSize: string = "w-8 h-8 lg:w-12 lg:h-12";

    const languagesMap: Map<string, ReactNode> = new Map();
    const frameworksMap: Map<string, ReactNode> = new Map();
    const databaseMap: Map<string, ReactNode> = new Map();
    const toolsMap: Map<string, ReactNode> = new Map();

    // Map for Languages section
    languagesMap.set("JavaScript", <SiJavascript className={`${iconSize} mb-3 hover:text-amber-400 hover:bg-white`} />);
    languagesMap.set("TypeScript", <SiTypescript className={`${iconSize} mb-3 hover:text-sky-700 hover:bg-white`} />);
    languagesMap.set("Python", <SiPython className={`${iconSize} mb-3 hover:text-amber-600 `} />);
    languagesMap.set("Java", <FaJava className={`${iconSize} mb-3 hover:text-sky-700 `} />);
    languagesMap.set("C#", <SiCsharp className={`${iconSize} mb-3 hover:text-indigo-600 `} />);
    languagesMap.set("SQL PL/SQL", <TbSql className={`${iconSize} mb-3`} />);

    // Map for Frameworks section
    frameworksMap.set("React", <SiReact className={`${iconSize} mb-3 hover:text-sky-700`} />);
    frameworksMap.set("Next", <SiNextdotjs className={`${iconSize} mb-3`} />);
    frameworksMap.set("Flask", <SiFlask className={`${iconSize} mb-3 hover:text-sky-700`} />);
    frameworksMap.set(".NET", <SiDotnet className={`${iconSize} mb-3 hover:text-sky-700`} />);
    frameworksMap.set("Firebase", <SiFirebase className={`${iconSize} mb-3 hover:text-amber-600`} />);
    frameworksMap.set("Flutter", <SiFlutter className={`${iconSize} mb-3 hover:text-sky-700`} />);

    // Map for Databases section
    databaseMap.set("Oracle", <SiOracle className={`${iconSize} mb-3 hover:text-rose-600`} />);
    databaseMap.set("MS SQL Server", <SiMicrosoftsqlserver className={`${iconSize} mb-3`} />);
    databaseMap.set("MongoDB", <SiMongodb className={`${iconSize} mb-3 hover:text-green-600`} />);
    databaseMap.set("MySQL", <SiMysql className={`${iconSize} mb-3`} />);

    // Map for Tools section
    toolsMap.set("Git", <BsGit className={`${iconSize} mb-3 hover:text-amber-600 `} />);
    toolsMap.set("VSCode", <TbBrandVscode className={`${iconSize} mb-3 hover:text-sky-700 `} />);
    toolsMap.set("Figma", <SiFigma className={`${iconSize} mb-3 hover:text-rose-600 `} />);
    toolsMap.set("Linux", <SiLinux className={`${iconSize} mb-3 `} />);
    toolsMap.set("Postman", <SiPostman className={`${iconSize} mb-3 hover:text-amber-600 `} />);
    toolsMap.set("Jira", <SiJira className={`${iconSize} mb-3 hover:text-sky-700 `} />);

    return (
        <SectionLayout id="Technology" title="Technology">
            <IconsSection map={languagesMap} title="Languages/Other" />
            <IconsSection map={frameworksMap} title="Frameworks/Libraries" />
            <IconsSection map={databaseMap} title="DBMS" />
            <IconsSection map={toolsMap} title="Tools" />
        </SectionLayout>
    )
}

export default Tech;

//--------------------------------------------------------------------------------------------------------
type IconWithTextProp = {
    text: string;
    icon: ReactNode;
}

const IconWithText: React.FC<IconWithTextProp> = ({ text, icon }) => {
    const [isHovering, setIsHovering] = useState(false);

    const cardRef: any = useRef();

    useEffect(() => {
        const card = cardRef.current;
        gsap.fromTo(card, { opacity: 0, translateY: 100 }, {
            opacity: 1, translateY: 0, duration: 1.2, scrollTrigger: {
                trigger: card,
            }
        })
    }, []);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div ref={cardRef} className="flex flex-col justify-center items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {icon}
            <p className="text-sm md:text-lg">{text}</p>
        </div>
    )
}

// --------------------------------------------------------------------------------------------------------
type IconsSection = {
    title: string;
    map: Map<string, ReactNode>;
}

const IconsSection: React.FC<IconsSection> = ({ map, title }) => {
    return (
        <>
            <div className='w-full flex justify-start'>
                <h1 className="font-bold text-xl mb-4 lg:text-3xl">{title}</h1>
            </div>
            <div className="flex flex-col w-full my-4 lg:mb-16 justify-center items-center">
                <div className="grid gap-8 grid-cols-3 grid-rows-2 w-full md:flex md:py-4 lg:py-12 w-full md:justify-between md:items-center">
                    {Array.from(map.entries()).map(([icon, text]) => <IconWithText key={Math.random() * 1000} icon={text} text={icon} />)}
                </div>
            </div>
        </>
    );
}