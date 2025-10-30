import logo from '../../../assets/images/logo.png'
import searchLogo from '../../../assets/images/search-icon.svg'
import profileLogo from '../../../assets/images/profile-icon.svg'
import favoriteLogo from '../../../assets/images/favorite-icon.svg'
import bagLogo from '../../../assets/images/bag-icon.svg'
import { useState } from "react";
import CollectionMenu from "../CollectionMenu/CollectionMenu";
import NewInManu from '../NewInManu/NewInManu'
import PlusSizeMenu from '../PlusSizeMenu/PlusSizeMenu'
import SustainabilityMenu from '../SustainabilityMenu/SustainabilityMenu'

const Navigation = () => {
    const [collOpen, setCollOpen] = useState(false);
    const [newOpen, setNewOpen] = useState(false);
    const [plusOpen, setPlusOpen] = useState(false);
    const [sustainOpen, setSustainOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-primary flex justify-center">
            <div className='max-w-[1440px] w-full '>
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
                    <div className="flex gap-[24px]">
                        <button className="navMenuItem" onClick={() => setCollOpen(!collOpen)}>Collection</button>
                        <button className="navMenuItem" onClick={() => setNewOpen(!newOpen)}>New In</button>
                        <button className="navMenuItem">ModiWeek</button>
                        <button className="navMenuItem" onClick={() => setPlusOpen(!plusOpen)}>Plus Size</button>
                        <button className="navMenuItem w-[128px]" onClick={() => setSustainOpen(!sustainOpen)}>Sustainability</button>
                    </div>

                    {/* Icons */}
                    <div className="w-[184px] flex justify-center items-center gap-[24px] p-[4px]"> 
                        <img src={searchLogo} alt="search" className="cursor-pointer" /> 
                        <img src={profileLogo} alt="profile" className="cursor-pointer" /> 
                        <img src={favoriteLogo} alt="favorite" className="cursor-pointer" /> 
                        <img src={bagLogo} alt="bag" className="cursor-pointer" /> 
                    </div> 
                </div>
                <CollectionMenu collOpen={collOpen} />
                <NewInManu newOpen={newOpen} />
                <PlusSizeMenu plusOpen={plusOpen} />
                <SustainabilityMenu sustainOpen={sustainOpen}/>
            </div>
        </nav>
    );
};

export default Navigation;
