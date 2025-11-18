import { NavLink } from 'react-router-dom'
import { classes } from "../../../../utils/tailwindClasses"
import blouses from "../../../../assets/images/blouses.png"
import plusSize from "../../../../assets/images/plus-size.png"

const CollectionDropDown = () => {
    return (
        <section className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className="flex px-10 xl:px-[108px] justify-center">
                <div className="flex">
                    <div className="w-[184px] mr-0 xl:mr-6">
                        <h3 className={classes.dropMenuTitle}>Category</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/pants'}>Pants</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/outwear&jackets'}>Outwear & Jackets</NavLink></li> 
                            <li className={classes.dropMenuItem}><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/tees'}>Tees</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-[104px] mr-20 xl:mr-[104px]">
                        <h3 className={classes.dropMenuTitle}>Featured</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to="/new-in">New In</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/best-seller">Best Seller</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-[154px] mr-0 xl:mr-[54px]">
                        <h3 className={classes.dropMenuTitle}>More</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to="/bundles">Bundles</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/occasion-wear">Occasion Wear</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/matching-set">Matching Set</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to="/suiting">Suiting</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={blouses} alt="blouses image" className="w-[200px] xl:w-[288px]" />
                        <p className={classes.dropMenuImgName}>Blouses</p>
                    </div>
                    <div>
                        <img src={plusSize} alt="plus size image" className="w-[200px] xl:w-[288px]" />
                        <p className={classes.dropMenuImgName}>Plus Size</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollectionDropDown