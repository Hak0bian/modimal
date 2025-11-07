import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import search from '../../../assets/images/search-icon.svg'
import profile from '../../../assets/images/profile-icon.svg'
import favorite from '../../../assets/images/favorite-icon.svg'
import bag from '../../../assets/images/bag-icon.svg'
import burger from '../../../assets/images/burger-icon.svg'

const Navigation = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const closeMenu = () => setActiveMenu(null);
    const toggleMenu = (menu: string) => {
        setActiveMenu(prev => (prev === menu ? null : menu));
    };

    return (
        <>
            <nav className="sticky top-0 w-full left-0 right-0 z-10 bg-primary">
                <div>
                    {/* Top Bar */}
                    <div className="bg-bg_green text-center text-primary text-[10px] font-normal tracking-[0.8px] leading-4
                        xl:text-[12px] xl:font-semibold xl:leading-[30px]">
                        <p>Enjoy Free Shipping On All Orders</p>
                    </div>    
                    
                    <div className='flex gap-[35px] justify-between items-center px-5 py-1 xl:px-[108px] xl:py-4'>
                        {/* Burger & Search */}
                        <div className='flex gap-2 items-center w-[58px] md:w-[184px] xl:hidden'>      
                            <button className="cursor-pointer">
                                <img src={burger} alt="burger menu"/>
                            </button>
                            <button className="cursor-pointer">
                                <img src={search} alt="search" className='md:hidden'/>
                            </button>
                        </div>

                        {/* Logo */}
                        <NavLink to='/'>
                            <div className="text-center px-2.5 py-1.5 lg:px-3.5">
                                <img src={logo} alt="logo" className="w-[116px] md:w-[140px] lg:w-[184px]"/>
                                <p className="text-secordary text-[8px] mt-1.5 xl:text-[10px] xl:mt-2">women clothing</p>
                            </div>
                        </NavLink>

                        {/* Menu */}
                        <div className="hidden xl:flex gap-6">
                            <button className="navMenuItem" onClick={() => toggleMenu("collection")}>Collection</button>
                            <button className="navMenuItem" onClick={() => toggleMenu("newin")}>New In</button>
                            <button className="navMenuItem">ModiWeek</button>
                            <button className="navMenuItem" onClick={() => toggleMenu("plus")}>Plus Size</button>
                            <button className="navMenuItem pl-1" onClick={() => toggleMenu("sustain")}>Sustainability</button>
                        </div>

                        {/* Icons */}
                        <div className='flex gap-2 items-center w-[58px] md:w-[184px] md:gap-6 md:px-1'>
                            <button className="cursor-pointer hidden md:flex">
                                <img src={search} alt="search"/>
                            </button>
                            <button className="cursor-pointer hidden md:flex">
                                <img src={profile} alt="profile"/>
                            </button>
                            <button className="cursor-pointer">
                                <img src={favorite} alt="favorite"/>
                            </button>
                            <button className="cursor-pointer">
                                <img src={bag} alt="bag"/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            
             {/* Overlay */}
            {activeMenu && (
                <div onClick={closeMenu} className="w-full m-auto fixed inset-0 bg-black/50 z-5" />
            )}
        </>
    )
}

export default Navigation