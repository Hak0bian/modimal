import { BurgerMenu, CollectionDropDown, NewInDropDown, PlusSizeDropDown, Search, ShoppingCart, SustainDropDown } from '../index'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavMainContent from './NavMainContent/NavMainContent';
import { classes } from '../../utils/tailwindClasses';

const Navigation = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false)
    const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false)
    const [bagIsOpen, setBagIsOpen] = useState<boolean>(false)
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

    useEffect(() => {
        setActiveMenu(null);
        setIsVisible(false);
        setBurgerIsOpen(false);
        setSearchIsOpen(false);
        setBagIsOpen(false)
    }, [location.pathname]);

    return (
        <>
            <nav className="sticky top-0 left-0 right-0 z-10 bg-primary">
                <NavMainContent
                    toggleMenu={toggleMenu}
                    searchIsOpen={searchIsOpen}
                    setSearchIsOpen={setSearchIsOpen}
                    burgerIsOpen={burgerIsOpen}
                    setBurgerIsOpen={setBurgerIsOpen}
                    bagIsOpen={bagIsOpen}
                    setBagIsOpen={setBagIsOpen}
                />

                <div className={`
                    ${classes.bagDiv}
                    ${bagIsOpen ? "translate-x-0 md:translate-y-17 xl:translate-y-[110px]" : " translate-x-full md:-translate-y-full"}
                `}>
                    <ShoppingCart setBagIsOpen={setBagIsOpen} />
                </div>
            </nav>
            
            <BurgerMenu burgerIsOpen={burgerIsOpen} />
            <Search searchIsOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen}/>

            {/* Overlay */}
            {activeMenu && ( <div onClick={closeMenu} className="w-full m-auto fixed inset-0 bg-black/50 z-4 hidden lg:block"/> )}
            {bagIsOpen && ( <div onClick={() => setBagIsOpen(false)} className="w-full m-auto fixed inset-0 bg-black/50 z-4"/> )}
            {searchIsOpen && ( <div onClick={() => setSearchIsOpen(false)} className="w-full m-auto fixed inset-0 bg-black/50 z-4"/> )}

            {/* DropDowns */}
            <div className={`
                ${classes.dropDownDiv}
                ${isVisible ? "translate-y-0 pointer-events-auto" : " -translate-y-full pointer-events-none"}
            `}>
                {activeMenu === 'collection' && <CollectionDropDown />}
                {activeMenu === 'newin' && <NewInDropDown />}
                {activeMenu === 'plus' && <PlusSizeDropDown />}
                {activeMenu === 'sustain' && <SustainDropDown />}
            </div>

        </>
    )
}

export default Navigation