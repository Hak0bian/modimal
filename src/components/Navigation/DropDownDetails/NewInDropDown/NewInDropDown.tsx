import { NavLink } from "react-router-dom"
import { classes } from "../../../../utils/tailwindClasses"
import full from "../../../../assets/images/new1.png"
import boluses from "../../../../assets/images/new2.png"
import dresses from "../../../../assets/images/new3.png"

const NewInDropDown = () => {
    return (
        <div className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className="flex px-10 xl:px-[108px] justify-center">
                <div className="flex">
                    <div className="w-[184px] mr-0 xl:mr-6">
                        <h3 className={classes.dropMenuTitle}>Category</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/tees'}>Tees</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/pants'}>Pants</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                        </ul>
                    </div>
                    <div className="mr-24 xl:mr-[220px]">
                        <h3 className={classes.dropMenuTitle}>Tranding</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/Collection">Full Collection</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={full} alt="blouses image" className="w-44 xl:w-52" />
                        <p className={classes.dropMenuImgName}>Full Collection</p>
                    </div>
                    <div>
                        <img src={boluses} alt="plus size image" className="w-44 xl:w-52" />
                        <p className={classes.dropMenuImgName}>Boluses</p>
                    </div>
                    <div>
                        <img src={dresses} alt="plus size image" className="w-44 xl:w-52" />
                        <p className={classes.dropMenuImgName}>Dresses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewInDropDown