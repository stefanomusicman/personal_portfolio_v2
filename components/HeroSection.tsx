import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full h-[calc(100vh-96px)] relative flex lg:h-[calc(100vh-96px)] lg:flex-row lg:justify-start lg:items-center">
            {/* Circle 1 */}
            <div className="-left-16 bottom-10 w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] bg-gradient-to-r from-blue-500 to-green-500 p-px absolute lg:left-auto lg:bottom-20 lg:right-32 rounded-full">
                <div className="h-full w-full bg-[#060b1b] rounded-full"></div>
            </div>
            {/* Circle 2 */}
            <div className="left-48 bottom-40 w-[8rem] h-[8rem] lg:w-[15rem] lg:h-[15rem] bg-gradient-to-r from-blue-500 to-green-500 p-px absolute lg:left-auto lg:left-100 lg:bottom-80 lg:right-0 rounded-full">
            </div>
            {/* Circle 3 */}
            <div className="left-24 bottom-56 w-[10rem] h-[10rem] lg:w-[20rem] lg:h-[20rem] bg-gradient-to-r from-blue-500 to-green-500 p-px absolute lg:left-auto lg:left-100 lg:bottom-[28rem] lg:right-24 rounded-full">
            </div>

            {/* text */}
            <div className="lg:w-4/6 lg:h-[calc(100vh-96px)]">

            </div>
        </div>
    )
}

export default HeroSection;