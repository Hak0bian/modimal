import { NavLink } from 'react-router-dom'
import sustain1 from '../../../../assets/images/sustain1.png'
import sustain2 from '../../../../assets/images/sustain2.png'
import { classes } from '../../../../utils/tailwindClasses'

const SustainDropDown = () => {
    return (
        <div className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className='flex px-10 xl:px-[108px] justify-center'>
                <div className="flex">
                    <div className="w-[184px] mr-40 xl:mr-[264px]">
                        <h3 className={classes.dropMenuTitle}>Sustainability</h3>
                        <ul className={classes.dropMenuList}>
                            <li className={classes.dropMenuItem}><NavLink to={'/mission'}>Mission</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/processing'}>Processing</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/materials'}>Materials</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/packaging '}>Packaging</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/product-care'}>Product Care</NavLink></li>
                            <li className={classes.dropMenuItem}><NavLink to={'/our-suppliers'}>Our Suppliers</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={sustain1} alt="blouses image" className="w-[290px] xl:w-[398px]" />
                    </div>
                    <div>
                        <img src={sustain2} alt="plus size image" className="w-[290px] xl:w-[398px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SustainDropDown