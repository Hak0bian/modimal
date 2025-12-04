import type { INavContentPropsType } from '../../propsTypes'
import { NavLink } from 'react-router-dom'
import { classes } from '../../../utils/tailwindClasses'
import logo from '../../../assets/images/logo.png'
import search from '../../../assets/images/search-icon.svg'
import profile from '../../../assets/images/profile-icon.svg'
import favorite from '../../../assets/images/favorite-icon.svg'
import bag from '../../../assets/images/bag-icon.svg'
import burger from '../../../assets/images/burger-icon.svg'
import close from '../../../assets/images/close-icon.svg'


const NavMainContent = ({ toggleMenu, searchIsOpen, setSearchIsOpen, burgerIsOpen, setBurgerIsOpen, bagIsOpen, setBagIsOpen }: INavContentPropsType) => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div>
            {/* Top Bar */}
            <div className={classes.navTopBar}>
                <p>Enjoy Free Shipping On All Orders</p>
            </div>

            <div className='flex gap-[35px] justify-between items-center px-5 xl:px-[108px]'>
                {/* Burger & Search */}
                <div className='flex gap-2 items-center w-[58px] md:w-[184px] lg:hidden'>
                    <button className="cursor-pointer w-[18px]" onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
                        {burgerIsOpen ? <img src={close} alt="burger icon" /> : <img src={burger} alt="burger icon" />}
                    </button>
                    <button className="cursor-pointer md:hidden" onClick={() => setSearchIsOpen(!searchIsOpen)}>
                        {searchIsOpen ? <img src={close} alt="burger icon" className='ml-1' /> : <img src={search} alt="search" />}
                    </button>
                </div>

                {/* Logo */}
                <NavLink to='/' onClick={scrollToTop}>
                    <div className="flex flex-col justify-center items-center h-10 mt-2 mb-1 mx-3.5 lg:h-[46px] xl:mt-4 xl:mb-[18px]">
                        <img src={logo} alt="logo" className="w-[116px] md:w-[140px] xl:w-[156px]" />
                        <p className="text-secondary text-[8px] mt-1.5 xl:text-[10px] xl:mt-2">women clothing</p>
                    </div>
                </NavLink>

                {/* Menu */}
                <div className="w-[580px] h-8 hidden lg:flex justify-between px-2 xl:w-[648px]">
                    <button className={classes.menuBtn} onClick={() => toggleMenu("collection")}>Collection</button>
                    <button className={classes.menuBtn} onClick={() => toggleMenu("newin")}>New In</button>
                    <button className={classes.menuBtn}>ModiWeek</button>
                    <button className={classes.menuBtn} onClick={() => toggleMenu("plus")}>Plus Size</button>
                    <button className={classes.menuBtn} onClick={() => toggleMenu("sustain")}>Sustainability</button>
                </div>

                {/* Icons */}
                <div className='flex gap-2 items-center w-[58px] md:w-[184px] md:gap-6 md:px-1'>
                    <button className="cursor-pointer hidden md:flex" onClick={() => setSearchIsOpen(!searchIsOpen)}>
                        {searchIsOpen ? <img src={close} alt="burger icon" /> : <img src={search} alt="search" />}
                    </button>
                    <button className="cursor-pointer hidden md:flex">
                        <NavLink to='/register'><img src={profile} alt="profile" /></NavLink>
                    </button>
                    <NavLink to='/favorites'>
                        <img src={favorite} alt="favorite" />
                    </NavLink>
                    <button className="cursor-pointer" onClick={() => setBagIsOpen(!bagIsOpen)}>
                        <img src={bag} alt="bag" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavMainContent