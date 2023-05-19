import Link from "next/link";
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const NavBar = () => {
    return (
        <div className="w-11/12 grid grid-cols-2 lg:grid-cols-10">
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
                <Link href="">Projects</Link>
                <Link href="">Technologies</Link>
                <Link href="">About me</Link>
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
                <AiFillLinkedin className="w-8 h-8" />
                <AiFillGithub className="w-8 h-8 ml-5" />
                <CgFileDocument className="w-8 h-8 ml-5" />
            </div>
        </div>


    )
}

export default NavBar;