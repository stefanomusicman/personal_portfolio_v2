'use client';
import { useEffect, useRef, useState } from "react";
import SectionLayout from "./SectionLayout";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Register the Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener on component mount
        window.addEventListener('resize', handleResize);

        // Initial screen width
        setScreenWidth(window.innerWidth);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <SectionLayout id="About-Me" title="About Me">
            {screenWidth < 768 && <MobileAboutMe />}
            {screenWidth >= 768 && <DesktopAboutMe />}
        </SectionLayout>
    );
}

export default AboutMe;

// --------------------------------------------------------------------------------------------------
const DesktopAboutMe = () => {

    const leftOneRef: any = useRef();
    const rightOneRef: any = useRef();
    const leftTwoRef: any = useRef();
    const rightTwoRef: any = useRef();

    useEffect(() => {
        const leftOne = leftOneRef.current;
        const rightOne = rightOneRef.current;
        const leftTwo = leftTwoRef.current;
        const rightTwo = rightTwoRef.current;

        gsap.fromTo(rightOne, { opacity: 0, translateX: 100 }, {
            opacity: 1, translateX: 0, duration: 3, scrollTrigger: {
                trigger: rightOne,
            }
        })
        gsap.fromTo(rightTwo, { opacity: 0, translateX: 100 }, {
            opacity: 1, translateX: 0, duration: 3, scrollTrigger: {
                trigger: rightTwo,
            }
        })
        gsap.fromTo(leftOne, { opacity: 0, translateX: -100 }, {
            opacity: 1, translateX: 0, duration: 3, scrollTrigger: {
                trigger: leftOne,
            }
        })
        gsap.fromTo(leftTwo, { opacity: 0, translateX: -100 }, {
            opacity: 1, translateX: 0, duration: 3, scrollTrigger: {
                trigger: leftTwo,
            }
        })
    }, []);

    return (
        <>
            {/*  <!-- component --*/}
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
                    {/*- right timeline --*/}
                    <div ref={rightOneRef} className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
                        </div>
                        <div className="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">{cardInfo[0].title}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{cardInfo[0].description}</p>
                        </div>
                    </div>

                    {/*-- left timeline --*/}
                    <div ref={leftOneRef} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2020</h1>
                        </div>
                        <div className="order-1 bg-blue-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">{cardInfo[1].title}</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{cardInfo[1].description}</p>
                        </div>
                    </div>

                    {/*- right timeline --*/}
                    <div ref={rightTwoRef} className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">2021</h1>
                        </div>
                        <div className="order-1 bg-green-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">{cardInfo[2].title}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{cardInfo[2].description}</p>
                        </div>
                    </div>

                    {/*-- left timeline --*/}
                    <div ref={leftTwoRef} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2022</h1>
                        </div>
                        <div className="order-1 bg-blue-500 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">{cardInfo[3].title}</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{cardInfo[3].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// --------------------------------------------------------------------------------------------------
const MobileAboutMe = () => {
    return (
        // <!-- component -->
        <div className="py-10 container mx-auto">
            {/* <!-- component --> */}
            <div className="relative">
                <div className="border-r-4 border-black absolute h-full top-0" style={{ 'left': '9px' }}></div>
                <ul className="list-none m-0 p-0">
                    {cardInfo.map((item) => <MobileCard key={item.year} year={item.year} title={item.title} description={item.description} />)}
                </ul>
            </div>
        </div>
    )
}
// --------------------------------------------------------------------------------------------------
const MobileCard: React.FC<CardDetails> = ({ year, title, description }) => {
    return (
        <li className="mb-5  ">
            <div className="flex group items-center ">
                <div className="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                    <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                    <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-2xl">{title}</h3>
                        <p className="pb-4 text-sm text-gray-100">{year}</p>
                        <hr />
                        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">{description}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

// --------------------------------------------------------------------------------------------------
type CardDetails = {
    year: string;
    title: string;
    description: string;
}

const cardInfo: CardDetails[] = [
    {
        year: '2019',
        title: "The Travelling Musician",
        description: "This was a very interesting year to the say the least. I travelled to Ho Chi Minh City, Vietnam on a professional musical endeavour.",
    },
    {
        year: '2020',
        title: "Learning to Adapt",
        description: "Following my successful musical journey, 2020 was set to be a year filled with adventures however the covid-19 pandemic threw a unexpected rock in the road and halted all plans.",
    },
    {
        year: '2021',
        title: "Diving into JavaScript",
        description: "Upon discovering HTML and CSS, I began creating basic webpages which grew my interest towards programming. I knew learning a programming language was essential, this lead me to Javascript.",
    },
    {
        year: '2022',
        title: "Frameworks, Projects and College",
        description: "After getting comfortable with Javascript I began learning React.js to modernize my knowledge of web development. In an effort to receive more formal training, I decided to enroll at a local college to further my knowledge.",
    },
]