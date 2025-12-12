import { NavLink } from 'react-router-dom'
import { classes } from '../../../../utils/tailwindClasses'
import plus1 from '../../../../assets/images/plus1.png'
import plus2 from '../../../../assets/images/plus2.png'
import plus3 from '../../../../assets/images/plus3.png'

const PlusSizeDropDown = () => {
    return (
        <div className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className='flex px-10 xl:px-[108px] justify-center'>
                <div className="flex">
                    <div className="w-[184px] mr-49 xl:mr-[366px]">
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
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={plus1} alt="blouses image" className="w-44 xl:w-52" />
                        <p className={classes.dropMenuImgName}>Pants</p>
                    </div>
                    <div>
                        <img src={plus2} alt="plus size image" className="w-44 xl:w-52" />
                        <p className={classes.dropMenuImgName}>Dresses</p>
                    </div>
                    <div>
                        <img src={plus3} alt="plus size image" className="w-44 xl:w-52 h-105 object-cover" />
                        <p className={classes.dropMenuImgName}>Blouses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusSizeDropDown