'use client';
import Link from "next/link";
import React, { useState } from "react";

const HeroSection = () => {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="w-full h-[calc(100vh-96px)] relative flex flex-col items-center lg:flex-row lg:justify-start lg:items-center">
            <BigCircle setIsHovering={setIsHovering} isHovering={isHovering} />

            <FilledCircle setIsHovering={setIsHovering} isHovering={isHovering} />

            <CircleWithImage isHovering={isHovering} setIsHovering={setIsHovering} />

            <TextSection />
        </div>
    )
}

type HoverStatus = {
    isHovering: Boolean;
    setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}

// --------------------------------------------------------------------------------------------------
const BigCircle: React.FC<HoverStatus> = ({ isHovering }) => {

    const styles: string = `${isHovering && 'animate-pulse'}
    ${isHovering && 'animate-wiggle'}
    -left-16 
    bottom-10 
    w-[20rem] 
    h-[20rem] 
    bg-gradient-to-r from-blue-500 to-green-500 
    p-px 
    absolute 
    lg:w-[25rem]
    lg:h-[25rem]
    lg:bottom-auto
    lg:left-auto
    lg:right-10
    xl:w-[40rem] 
    xl:h-[40rem] 
    xl:left-auto 
    xl:bottom-20 
    xl:right-32 
    rounded-full`

    return (
        <div className={styles}>
            <div className="h-full w-full bg-[#060b1b] rounded-full"></div>
        </div>
    );
}

// --------------------------------------------------------------------------------------------------
const FilledCircle: React.FC<HoverStatus> = ({ isHovering }) => {
    const styles: string = `
    ${isHovering && 'animate-wiggleSlow'}
    left-48 
    bottom-40 
    w-[8rem] 
    h-[8rem] 
    bg-gradient-to-r from-blue-500 to-green-500 
    p-px 
    absolute 
    shadow-lg shadow-cyan-500/50
    lg:w-[10rem]
    lg:h-[10rem]
    lg:left-auto
    lg:bottom-auto
    lg:right-0
    xl:w-[15rem] 
    xl:h-[15rem] 
    xl:left-auto 
    xl:left-100 
    xl:bottom-80 
    xl:right-0 
    rounded-full`

    return (
        <div className={styles}>
        </div>
    );
}

// --------------------------------------------------------------------------------------------------
const CircleWithImage: React.FC<HoverStatus> = ({ isHovering, setIsHovering }) => {

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const styles: string = `left-24 
    bottom-56 
    w-[10rem] 
    h-[10rem] 
    bg-gradient-to-r from-blue-500 to-green-500 
    p-px 
    absolute 
    shadow-lg shadow-cyan-500/50
    lg:w-[12rem]
    lg:h-[12rem]
    lg:left-auto
    lg:bottom-auto
    lg:right-10
    lg:bottom-[29rem]
    xl:w-[20rem] 
    xl:h-[20rem] 
    xl:left-auto 
    xl:left-100 
    xl:bottom-[28rem] 
    xl:right-24 
    xl:filter grayscale 
    xl:hover:filter-none
    rounded-full`

    return (
        <div className={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img alt="profile-pic" src="/ai-profile.jpg" className="h-full w-full bg-[#060b1b] rounded-full" />
        </div>
    );
}

// --------------------------------------------------------------------------------------------------
const TextSection = () => {
    return (
        <div className="
                w-11/12
                leading-10
                z-10
                flex
                flex-col
                justify-evenly
                h-1/2
                lg:justify-center
                lg:w-4/6 
                lg:h-[calc(100vh-96px)]">
            {/* title container */}
            <div className="
                    lg:h-1/4
                    lg:flex
                    lg:flex-col
                    lg:justify-evenly">
                <h1 className="font-bold text-2xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-500 to-green-500 inline-block text-transparent bg-clip-text">Hello, I'm Stefano,</h1>
                <h1 className="text-2xl lg:text-5xl xl:text-6xl">software developer</h1>
            </div>
            {/* description container */}
            <div className="
                    text-slate-400
                    lg:h-1/5
                    lg:flex
                    lg:flex-col
                    lg:justify-center">
                <p className="text-sm lg:text-lg">Software Developer with an artistic background currently studying computer science looking to grow and take on fun challenges in the world of tech. Passionate about using code as a tool to build fun and amazing things.</p>
            </div>
            {/* Button container */}
            <div className="
                    lg:h-1/5
                    lg:flex
                    lg:flex-col
                    lg:justify-center">
                <Link href="https://drive.google.com/file/d/1zO2854p5sFkV3u6V914UhjUypcPQjiDk/view?usp=sharing" target='_blank'><button className="
                    rounded-full
                    bg-gradient-to-r from-blue-500 to-green-500
                    px-4
                    py-1
                    lg:w-1/4
                    xl:w-1/5
                    xl:py-3
                    ">
                    Download CV
                </button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;