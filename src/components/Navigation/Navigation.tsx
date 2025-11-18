import { BurgerMenu, CollectionDropDown, NewInDropDown, PlusSizeDropDown, SustainDropDown } from '../index'
import { useState } from 'react'
import NavMainContent from './NavMainContent/NavMainContent';

const Navigation = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState(false);
    const closeMenu = () => setActiveMenu(null);

    const toggleMenu = (menu: string) => {
        if (activeMenu === menu) {
            setIsVisible(false);
            setTimeout(() => setActiveMenu(null), 300);
        } else {
            setActiveMenu(menu);
            setIsVisible(true);
        }
    };

    return (
        <>
            <nav className="sticky top-0 left-0 right-0 z-10 bg-primary">
                <NavMainContent 
                    toggleMenu={toggleMenu} 
                    burgerIsOpen={burgerIsOpen} 
                    setBurgerIsOpen={setBurgerIsOpen}
                />
            </nav>
            <BurgerMenu burgerIsOpen={burgerIsOpen} />

            {/* Overlay */}
            {activeMenu && (
                <div onClick={closeMenu} className="w-full m-auto fixed inset-0 bg-black/50 z-5 hidden lg:block" />
            )}

            {/* DropDowns */}
            <div className={`fixed top-[74px] z-9 pt-8 pb-[58px] bg-primary xl:top-[110px] transition-all duration-300 ease-in-out
                ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-50 pointer-events-none"}`}
            >
                {activeMenu === 'collection' && <CollectionDropDown />}
                {activeMenu === 'newin' && <NewInDropDown />}
                {activeMenu === 'plus' && <PlusSizeDropDown />}
                {activeMenu === 'sustain' && <SustainDropDown />}
            </div>
        </>
    )
}

export default Navigation