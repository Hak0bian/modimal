import { useState } from "react";
import CollectionMenu from "../CollectionMenu/CollectionMenu"
import NewInManu from "../NewInManu/NewInManu";
import PlusSizeMenu from "../PlusSizeMenu/PlusSizeMenu";
import SustainabilityMenu from "../SustainabilityMenu/SustainabilityMenu";
import profile from '../../../../assets/images/profile-icon.svg'
import { classes } from "../../../../utils/tailwindClasses";

const BurgerMenu = ({ burgerIsOpen }: { burgerIsOpen: boolean }) => {
    const [expanded, setExpanded] = useState<string | boolean>(false);

    return (
        <section className={`fixed left-0 w-screen h-screen overflow-y-auto px-5 py-14 bg-primary z-8 lg:hidden
            transform transition-transform duration-300 ease-in-out ${burgerIsOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div>
                <CollectionMenu expanded={expanded === 'collection'} onChange={() => setExpanded(expanded === 'collection' ? false : 'collection')}/>
                <NewInManu expanded={expanded === 'newin'} onChange={() => setExpanded(expanded === 'newin' ? false : 'newin')}/>
                <PlusSizeMenu expanded={expanded === 'plussize'} onChange={() => setExpanded(expanded === 'plussize' ? false : 'plussize')}/>
                <SustainabilityMenu expanded={expanded === 'sustainability'} onChange={() => setExpanded(expanded === 'sustainability' ? false : 'sustainability')}/>
            </div>
            <div className="flex justify-center gap-4 border-t border-lightgray mt-[68px] pt-3.5">
                <button className={classes.burgerMenuBtn}>
                    <img src={profile} alt="profile image"/>
                    Log In
                </button>
                <button className={classes.burgerMenuBtn}>Create Account</button>
            </div>

        </section>
    )
}

export default BurgerMenu