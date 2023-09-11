import {useState, useEffect, useCallback} from 'react';
import NavbarItem from '@/components/NavbarItem';
import MobileMenu from '@/components/MobileMenu';
import AccountMenu from '@/components/AccountMenu';

const TOP_OFFSET = 95;

import { BsChevronDown, BsSearch, BsBell} from 'react-icons/bs';

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, []);

    return (
        <nav className="w-full fixed z-40" id="majornav">
            <div className={`px-4 md-:px-16 py-16 flex flex-row items-center
            transition duration-700 ${showBackground? 'bg-zinc-900 bg-opacity-80' : ' '} `}>
                <img className="h-16 second_logo" src="/images/conspix/conspix-premium.png" alt= "conspixlogo"/>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div> 
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? '-rotate-90' : 'rotate-0'}`}  />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-400 cursor-pointer">
                        < BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-400 cursor-pointer">
                        < BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 realtive cursor-pointer">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
                            <img src="/images/avatars-kings.png" alt="avatar-profil default" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? '-rotate-90' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
    
}

export default Navbar;