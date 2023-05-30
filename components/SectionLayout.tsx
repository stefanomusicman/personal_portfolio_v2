import { ReactNode } from "react";

type WrapperProps = {
    title: string;
    children: ReactNode;
    id: string;
}

const SectionLayout: React.FC<WrapperProps> = ({ children, title, id }) => {
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
                <h1 className="font-bold text-2xl mb-4 md:mb-14 lg:text-5xl">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default SectionLayout;