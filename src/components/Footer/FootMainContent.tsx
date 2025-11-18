import { NavLink } from 'react-router-dom'
import { classes } from '../../utils/tailwindClasses'
import vector from '../../assets/images/Vector.svg'

const FootMainContent = () => {
    return (
        <div className='flex flex-col gap-6 md:flex-row mdx:gap-13 lg:gap-10 xl:gap-[104px]'>
            <div>
                <h3 className="text-[14px] font-semibold leading-[1.4] pb-4 xs:text-[16px] sm:text-[20px] md:text-[14px] lg:text-[16px] xl:text-[20px] xl:font-bold">
                    Join Our Club, Get 15% Off For Your Birthday
                </h3>
                {/* Input */}
                <div className="w-[320px] h-10 flex border border-[#D1D9CF] pl-4 pr-3 xs:w-[400px] sm:w-[496px] md:w-[320px] lg:w-[400px] xl:w-[496px]">
                    <input type="text" placeholder="Enter Your Email Address"
                        className="w-full bg-transparent border-none outline-none placeholder:text-[12px] placeholder:text-#D1D9CF text-primary" />
                    <button className="bg-transparent border-none cursor-pointer">
                        <img src={vector} alt="vector" />
                    </button>
                </div>
                {/* Checkbox */}
                <div className="w-[320px] flex items-center gap-2 pt-2 sm:w-[496px] md:w-[320px] md:pt-4 xl:w-[470px]">
                    <input type="checkbox" className="w-4 h-4" />
                    <p className="text-[10px] font-semibold capitalize xs:text-[12px] md:text-[10px] xl:text-[12px]">
                        By submitting your email, you agree to receive advertising emails from Modimal
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-10 md:gap-x-6 lg:gap-x-10 xl:gap-x-13'>
                {/* About */}
                <div>
                    <h4 className={classes.footerMenuTitle}>About Modimal</h4>
                    <ul className={classes.footerMenuList}>
                        <NavLink to='/collection'><li className={classes.footerMenuItem}>Collection</li></NavLink>
                        <NavLink to='/sustainability'><li className={classes.footerMenuItem}>Sustainability</li></NavLink>
                        <NavLink to='/privacy-policy'><li className={classes.footerMenuItem}>Privacy Policy</li></NavLink>
                        <NavLink to='support-system'><li className={classes.footerMenuItem}>Support System</li></NavLink>
                        <NavLink to='terms&condition'><li className={classes.footerMenuItem}>Terms & Condition</li></NavLink>
                        <NavLink to='copyright-notice'><li className={classes.footerMenuItem}>Copyright Notice</li></NavLink>
                    </ul>
                </div>
                {/* Help */}
                <div>
                    <h4 className={classes.footerMenuTitle}>Help & Support</h4>
                    <ul className={classes.footerMenuList}>
                        <NavLink to='orders&shipping'><li className={classes.footerMenuItem}>Orders & Shipping</li></NavLink>
                        <NavLink to='returns&refunds'><li className={classes.footerMenuItem}>Returns & Refunds</li></NavLink>
                        <NavLink to='faqs'><li className={classes.footerMenuItem}>FAQs</li></NavLink>
                        <NavLink to='contact-us'><li className={classes.footerMenuItem}>Contact Us</li></NavLink>
                    </ul>
                </div>
                {/* Join */}
                <div>
                    <h4 className={classes.footerMenuTitle}>Join Up</h4>
                    <ul className={classes.footerMenuList}>
                        <NavLink to='modimal-club'><li className={classes.footerMenuItem}>Modimal Club</li></NavLink>
                        <NavLink to='careers'><li className={classes.footerMenuItem}>Careers</li></NavLink>
                        <NavLink to='visit-us '><li className={classes.footerMenuItem}>Visit Us</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FootMainContent