import { ReactNode } from "react";

type WrapperProps = {
    children: ReactNode;
}

const SectionLayout: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="
            w-11/12
            flex
            flex-col
            items-center
            md:items-start
            mb-20
            lg:mb-36
            lg:w-full">
            {children}
        </div>
    )
}

export default SectionLayout;