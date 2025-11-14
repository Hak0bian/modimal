import {BurgerMenu, CollectionDropDown, NewInDropDown, PlusSizeDropDown, SustainDropDown} from '../../index'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import search from '../../../assets/images/search-icon.svg'
import profile from '../../../assets/images/profile-icon.svg'
import favorite from '../../../assets/images/favorite-icon.svg'
import bag from '../../../assets/images/bag-icon.svg'
import burger from '../../../assets/images/burger-icon.svg'
import close from '../../../assets/images/close-icon.svg'


const Navigation = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)
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

                    <div className='flex gap-[35px] justify-between items-center px-5 xl:px-[108px]'>
                        {/* Burger & Search */}
                        <div className='flex gap-2 items-center w-[58px] md:w-[184px] lg:hidden'>
                            <button className="cursor-pointer w-[18px]" onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
                                { burgerIsOpen ? <img src={burger} alt="burger icon" /> : <img src={close} alt="burger icon" /> }
                            </button>
                            <button className="cursor-pointer">
                                <img src={search} alt="search" className='md:hidden' />
                            </button>
                        </div>

                        {/* Logo */}
                        <NavLink to='/'>
                            <div className="flex flex-col justify-center items-center h-10 mt-2 mb-1 lg:h-[46px] xl:mt-4 xl:mb-[18px]">
                                <img src={logo} alt="logo" className="w-[116px] md:w-[140px] xl:w-[156px]" />
                                <p className="text-secondary text-[8px] mt-1.5 xl:text-[10px] xl:mt-2">women clothing</p>
                            </div>
                        </NavLink>

                        {/* Menu */}
                        <div className="w-[580px] h-8 hidden lg:flex justify-between px-2 xl:w-[648px]">
                            <button className="text-[16px] text-secondary cursor-pointer xl:text-[18px]" onClick={() => toggleMenu("collection")}>Collection</button>
                            <button className="text-[16px] text-secondary cursor-pointer xl:text-[18px]" onClick={() => toggleMenu("newin")}>New In</button>
                            <button className="text-[16px] text-secondary cursor-pointer xl:text-[18px]">ModiWeek</button>
                            <button className="text-[16px] text-secondary cursor-pointer xl:text-[18px]" onClick={() => toggleMenu("plus")}>Plus Size</button>
                            <button className="text-[16px] text-secondary cursor-pointer xl:text-[18px]" onClick={() => toggleMenu("sustain")}>Sustainability</button>
                        </div>

                        {/* Icons */}
                        <div className='flex gap-2 items-center w-[58px] md:w-[184px] md:gap-6 md:px-1'>
                            <button className="cursor-pointer hidden md:flex">
                                <img src={search} alt="search" />
                            </button>
                            <button className="cursor-pointer hidden md:flex">
                                <img src={profile} alt="profile" />
                            </button>
                            <button className="cursor-pointer">
                                <img src={favorite} alt="favorite" />
                            </button>
                            <button className="cursor-pointer">
                                <img src={bag} alt="bag" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <BurgerMenu burgerIsOpen={burgerIsOpen} />

            {/* Overlay */}
            {activeMenu && (
                <div onClick={closeMenu} className="w-full m-auto fixed inset-0 bg-black/50 z-5 hidden lg:block"/>
            )}

            <div className='fixed top-[74px]  z-10 pt-8 pb-[58px] bg-primary xl:top-[110px] '>
                {activeMenu === 'collection' && <CollectionDropDown/>}
                {activeMenu === 'newin' && <NewInDropDown/>}
                {activeMenu === 'plus' && <PlusSizeDropDown/>}
                {activeMenu === 'sustain' && <SustainDropDown/>}
            </div>
            
        </>
    )
}

export default Navigation