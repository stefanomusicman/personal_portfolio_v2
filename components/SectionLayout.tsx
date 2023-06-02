'use client';
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


type WrapperProps = {
    title: string;
    children: ReactNode;
    id: string;
}

const SectionLayout: React.FC<WrapperProps> = ({ children, title, id }) => {
    const titleRef: any = useRef();

    useEffect(() => {
        const title = titleRef.current;
        gsap.fromTo(title, { translateX: -1000 }, {
            translateX: 0, duration: 1, scrollTrigger: {
                trigger: title,
            }
        })
    }, [])

    return (
        <div id={id} className="
            w-11/12
            flex
            flex-col
            items-center
            md:items-start
            mb-12
            lg:mb-36
            lg:w-full">
            <div className='w-full flex justify-start'>
                <h1 ref={titleRef} className="font-bold text-2xl mb-4 md:mb-14 lg:text-5xl">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default SectionLayout;