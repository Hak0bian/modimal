import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import searchLogo from '../../assets/images/search-icon.svg'
import profileLogo from '../../assets/images/profile-icon.svg'
import favoriteLogo from '../../assets/images/favorite-icon.svg'
import bagLogo from '../../assets/images/bag-icon.svg'

const Navigation = () => {
    return (
        <nav className="sticky top-0 z-10 max-w-[1440px] bg-primary mx-auto">
            {/* Top Bar */}
            <div className="bg-bg_green text-center leading-[30px] text-primary text-[12px] font-[600] tracking-[0.8px]">
                <p>Enjoy Free Shipping On All Orders</p>
            </div>

            <div className="flex justify-between items-center px-[108px]">
                {/* Logo */}
                <div className="max-w-[184px] text-center py-[22px] px-[14px]">
                    <img src={logo} alt="logo" className="max-w-[156px]" />
                    <p className="text-secordary text-[10px]">women clothing</p>
                </div>

                {/* Menu */}
                <div className="flex grow gap-[24px] px-[104px]">
                    <NavLink to="/Collection" className="navMenuItem">Collection</NavLink>
                    <NavLink to="/NewIn" className="navMenuItem">New In</NavLink>
                    <NavLink to="/ModiWeek" className="tnavMenuItem">ModiWeek</NavLink>
                    <NavLink to="/PlusSize" className="text-[18px] text-secordary w-[128px] text-center">Plus Size</NavLink>
                    <NavLink to="/Sustainability" className="navMenuItem">Sustainability</NavLink>
                </div>

                {/* Icons */}
                <div className="w-[184px] flex justify-center items-center gap-[24px] p-[4px]">
                    <img src={searchLogo} alt="search" className="cursor-pointer" />
                    <img src={profileLogo} alt="profile" className="cursor-pointer" />
                    <img src={favoriteLogo} alt="favorite" className="cursor-pointer" />
                    <img src={bagLogo} alt="bag" className="cursor-pointer" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation