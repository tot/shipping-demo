import Image from "next/image"
import LogoPath from "../assets/Logo.png"

const Navbar = () => {
    return (
        <nav className="w-full border-b border-neutral-100 bg-white h-16 flex items-center">
            <div className="w-full px-6 lg:w-[90%] mx-auto flex items-center space-x-2">
                <Image src={LogoPath} width={32} height={32} alt="Thryft Ship Logo" />
                <h1 className="text-xl font-bold text-primary-indigo">Thryft Ship</h1>
            </div>
        </nav>
    )
}

export default Navbar
