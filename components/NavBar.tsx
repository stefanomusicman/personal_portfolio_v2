'use client';
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import ScrollLink from "./ScrollLink";
import { gsap } from 'gsap';


const NavBar = () => {
    const linkHoverStyles: string = "hover:bg-gradient-to-r from-blue-500 to-green-500 hover:inline-block hover:text-transparent hover:bg-clip-text";

    const navBarRef: any = useRef();

    useEffect(() => {
        const navBar = navBarRef.current;
        gsap.fromTo(navBar, { opacity: 0, translateY: 75 }, {
            opacity: 1, translateY: 0, duration: 1.5
        })
    }, [])

    return (
        <div ref={navBarRef} className="w-11/12 grid grid-cols-2 lg:grid-cols-10 lg:w-full">
            <div className="
                flex
                justify-start
                items-center
                h-16
                col-span-1
                order-1 
                col-span-1 
                lg:order-1 
                lg:col-span-3
                lg:h-24"
            >
                <p className="text-2xl">Stefano Proietti</p>
            </div>
            <div className="
                flex
                justify-between
                items-center
                h-16
                col-span-1
                order-3 
                col-span-2 
                lg:order-2 
                lg:col-span-4
                lg:h-24"
            >
                <ScrollLink className={linkHoverStyles} href="#Projects">Projects</ScrollLink>
                <ScrollLink className={linkHoverStyles} href="#Technology">Technologies</ScrollLink>
                <ScrollLink className={linkHoverStyles} href="#About-Me">About me</ScrollLink>
            </div>
            <div className="
                flex
                justify-end
                items-center
                h-16
                order-2 
                col-span-1
                lg:order-3 
                lg:col-span-3
                lg:h-24"
            >
                <Link href="https://www.linkedin.com/in/stefano-proietti-286497235/" target='_blank'><AiFillLinkedin className="w-8 h-8 hover:scale-125" /></Link>
                <Link href="https://github.com/stefanomusicman" target='_blank'><AiFillGithub className="w-8 h-8 ml-5 hover:scale-125" /></Link>
                <Link href="https://drive.google.com/file/d/1zO2854p5sFkV3u6V914UhjUypcPQjiDk/view?usp=sharing" target='_blank'><CgFileDocument className="w-8 h-8 ml-5 hover:scale-125" /></Link>
            </div>
        </div>
    )
}

export default NavBar;