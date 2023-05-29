'use client';
import React, { ReactNode, useState } from "react";
import SectionLayout from "./SectionLayout";
// --------- Languages Icons ---------------
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
// --------- Frameworks Icons ---------------
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
// ----------- Tools Icons ------------------
import { BsGit } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiJira } from 'react-icons/si';

const Tech = () => {
    const iconSize: string = "w-8 h-8 lg:w-12 lg:h-12";

    const languagesMap: Map<string, ReactNode> = new Map();
    const frameworksMap: Map<string, ReactNode> = new Map();
    const toolsMap: Map<string, ReactNode> = new Map();

    // Map for Languages section
    languagesMap.set("JavaScript", <SiJavascript className={`${iconSize} hover:text-amber-400 hover:bg-white`} />);
    languagesMap.set("TypeScript", <SiTypescript className={`${iconSize} hover:text-sky-700 hover:bg-white`} />);
    languagesMap.set("HTML", <SiHtml5 className={`${iconSize} hover:text-amber-600 `} />);
    languagesMap.set("CSS", <SiCss3 className={`${iconSize} hover:text-sky-700 `} />);
    languagesMap.set(" ", <SiCsharp className={`${iconSize} hover:text-indigo-600 `} />);
    languagesMap.set("", <TbSql className={`${iconSize}`} />);

    // Map for Frameworks section
    frameworksMap.set("React", <SiReact className={`${iconSize} hover:text-sky-700`} />);
    frameworksMap.set("Next", <SiNextdotjs className={`${iconSize}`} />);
    frameworksMap.set("Tailwind CSS", <SiTailwindcss className={`${iconSize} hover:text-sky-700`} />);
    frameworksMap.set("Strapi.io", <SiStrapi className={`${iconSize} hover:text-sky-700`} />);
    frameworksMap.set("Flutter", <SiFlutter className={`${iconSize} hover:text-sky-700`} />);

    // Map for Tools section
    toolsMap.set("Git", <BsGit className={`${iconSize} hover:text-amber-600 `} />);
    toolsMap.set("VSCode", <TbBrandVscode className={`${iconSize} hover:text-sky-700 `} />);
    toolsMap.set("Figma", <SiFigma className={`${iconSize} hover:text-rose-600 `} />);
    toolsMap.set("Linux", <SiLinux className={`${iconSize} `} />);
    toolsMap.set("Postman", <SiPostman className={`${iconSize} hover:text-amber-600 `} />);
    toolsMap.set("Jira", <SiJira className={`${iconSize} hover:text-sky-700 `} />);

    return (
        <SectionLayout title="Technology">
            <IconsSection map={languagesMap} title="Languages/Other" />
            <IconsSection map={frameworksMap} title="Frameworks/Libraries" />
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

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div className="flex justify-center items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {icon}
            {isHovering && <p className="ml-1 transition delay-150 duration-300 ease-in-out">{text}</p>}
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
            <div className="flex flex-col w-full mb-10 lg:mb-16 justify-center items-center">
                <div className="flex py-4 lg:py-12 w-full justify-between items-center">
                    {Array.from(map.entries()).map(([icon, text]) => <IconWithText icon={text} text={icon} />)}
                </div>
            </div>
        </>
    );
}