import SectionLayout from "./SectionLayout";
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import { SiReact } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
import { SiFlutter } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';
import { TbBrandVscode } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiJira } from 'react-icons/si';

const Tech = () => {
    const iconSize: string = "w-8 h-8 lg:w-12 lg:h-12";

    return (
        <SectionLayout>
            <div className='w-full flex justify-start'>
                <h1 className="font-bold text-3xl mb-4 md:mb-14 lg:text-5xl">Technology</h1>
            </div>
            <div className='w-full flex justify-start'>
                <h1 className="font-bold text-xl mb-4 lg:text-3xl">Languages/Other</h1>
            </div>
            <div className="flex flex-col w-full mb-10 lg:mb-16 justify-center items-center">
                <div className="flex py-4 lg:py-12 w-full justify-between items-center">
                    <SiJavascript className={iconSize} />
                    <SiTypescript className={iconSize} />
                    <SiHtml5 className={iconSize} />
                    <SiCss3 className={iconSize} />
                    <SiCsharp className={iconSize} />
                    <TbSql className={iconSize} />
                </div>
            </div>
            <div className='w-full flex justify-start'>
                <h1 className="font-bold text-xl mb-4 lg:text-3xl">Frameworks/Libraries</h1>
            </div>
            <div className="flex flex-col w-full mb-10 lg:mb-16 justify-center items-center">
                <div className="flex py-4 lg:py-12 w-full justify-between items-center">
                    <SiReact className={iconSize} />
                    <SiNextdotjs className={iconSize} />
                    <SiTailwindcss className={iconSize} />
                    <SiStrapi className={iconSize} />
                    <SiFlutter className={iconSize} />
                </div>
            </div>
            <div className='w-full flex justify-start'>
                <h1 className="font-bold text-xl mb-4 lg:text-3xl">Tools</h1>
            </div>
            <div className="flex flex-col w-full mb-10 lg:mb-16 justify-center items-center">
                <div className="flex py-4 lg:py-12 w-full justify-between items-center">
                    <BsGit className={iconSize} />
                    <TbBrandVscode className={iconSize} />
                    <SiFigma className={iconSize} />
                    <SiLinux className={iconSize} />
                    <SiPostman className={iconSize} />
                    <SiJira className={iconSize} />
                </div>
            </div>
        </SectionLayout>
    )
}

export default Tech;