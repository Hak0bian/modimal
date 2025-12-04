import { useEffect, useState } from "react";
import CollectionMenu from "../CollectionMenu/CollectionMenu"
import NewInManu from "../NewInManu/NewInManu";
import PlusSizeMenu from "../PlusSizeMenu/PlusSizeMenu";
import SustainabilityMenu from "../SustainabilityMenu/SustainabilityMenu";
import profile from '../../../../assets/images/profile-icon.svg'
import { classes } from "../../../../utils/tailwindClasses";
import { NavLink } from "react-router-dom";

const BurgerMenu = ({ burgerIsOpen }: { burgerIsOpen: boolean }) => {
    const [expanded, setExpanded] = useState<string | boolean>(false);

    useEffect(() => {
        burgerIsOpen || setExpanded(false)
    }, [burgerIsOpen])

    return (
        <section className={`${classes.burgerMenuDiv} ${burgerIsOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div>
                <CollectionMenu 
                    expanded={expanded === 'collection'} 
                    onChange={() => setExpanded(expanded === 'collection' ? false : 'collection')}
                />
                <NewInManu 
                    expanded={expanded === 'newin'} 
                    onChange={() => setExpanded(expanded === 'newin' ? false : 'newin')}
                />
                <PlusSizeMenu 
                    expanded={expanded === 'plussize'} 
                    onChange={() => setExpanded(expanded === 'plussize' ? false : 'plussize')}
                />
                <SustainabilityMenu 
                    expanded={expanded === 'sustainability'} 
                    onChange={() => setExpanded(expanded === 'sustainability' ? false : 'sustainability')}
                />
            </div>
            <div className="flex justify-center gap-4 border-t border-lightgray my-[68px] pt-3.5">
                <NavLink to='/login' className={classes.burgerMenuBtn}>
                    <img src={profile} alt="profile image"/>
                    Log In
                </NavLink>
                <NavLink to='/register' className={classes.burgerMenuBtn}>Create Account</NavLink>
            </div>

        </section>
    )
}

export default BurgerMenu