import { NavLink } from 'react-router-dom'
import vector from '../../assets/images/Vector.svg'
import instaLogo from '../../assets/images/insta-icon.svg'
import fbLogo from '../../assets/images/fb-icon.svg'
import pintLogo from '../../assets/images/pint-icon.svg'
import tiktokLogo from '../../assets/images/tiktok-icon.svg'
import rightsLogo from '../../assets/images/original.svg'
import chatIcon from '../../assets/images/chat-icon.svg'

const Footer = () => {
    return (
        <footer className='max-w-[1440px] mx-auto mt-12 bg-secondary text-primary flex justify-center relative md:justify-center'>
            <div className='flex flex-col gap-6 px-5 pt-8 pb-10'>
                <div className='flex flex-col gap-6 md:flex-row lg:gap-10 xl:gap-[104px]'>
                    <div>
                        <h3 className="text-[14px] font-semibold leading-[1.4] pb-4 
                            xs:text-[16px] sm:text-[20px] md:text-[14px] lg:text-[16px] xl:text-[20px] xl:font-bold">
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
                            <input type="checkbox" className="w-4 h-4"/>
                            <p className="text-[10px] font-semibold capitalize xs:text-[12px] md:text-[10px] xl:text-[12px]">
                                By submitting your email, you agree to receive advertising emails from Modimal
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-10 md:gap-x-4 lg:gap-x-10 xl:gap-x-13'>
                        {/* About */}
                        <div>
                            <h4 className='text-[14px] font-semibold leading-loose lg:text-[16px] xl:text-[20px] xl:font-bold'>About Modimal</h4>
                            <ul className='text-[14px] flex flex-col gap-1 leading-[1.8] md:text-[13px] lg:text-[16px] xl:text-[18px]'>
                                <NavLink to=''><li>Collection</li></NavLink>
                                <NavLink to=''><li>Sustainability</li></NavLink>
                                <NavLink to=''><li>Privacy Policy</li></NavLink>
                                <NavLink to=''><li>Support System</li></NavLink>
                                <NavLink to=''><li>Terms & Condition</li></NavLink>
                                <NavLink to=''><li>Copyright Notice</li></NavLink>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h4 className='text-[14px] font-semibold leading-loose lg:text-[16px] xl:text-[20px] xl:font-bold'>Help & Support</h4>
                            <ul className='text-[14px] flex flex-col gap-1 leading-[1.8] md:text-[13px] lg:text-[16px] xl:text-[18px]'>
                                <NavLink to=''><li>Orders & Shipping</li></NavLink>
                                <NavLink to=''><li>Returns & Refunds</li></NavLink>
                                <NavLink to=''><li>FAQs</li></NavLink>
                                <NavLink to=''><li>Contact Us</li></NavLink>
                            </ul>
                        </div>

                        {/* Join */}
                        <div>
                            <h4 className='text-[14px] font-semibold leading-loose lg:text-[16px] xl:text-[20px] xl:font-bold'>Join Up</h4>
                            <ul className='text-[14px] flex flex-col gap-1 leading-[1.8] md:text-[13px] lg:text-[16px] xl:text-[18px]'>
                                <NavLink to=''><li>Modimal Club</li></NavLink>
                                <NavLink to=''><li>Careers</li></NavLink>
                                <NavLink to=''><li>Visit Us</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div >
                    <div className='flex gap-4 w-[150px]'>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instaLogo} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={fbLogo} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <img src={pintLogo} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={tiktokLogo} alt="Instagram" className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex items-center gap-2 mt-6 xl:mt-11">
                        <img src={rightsLogo} alt="Rights Logo" className='w-3.5'/>
                        <p className="text-[10px] text-lightgray h-[18px] md:text-[12px]">2023 modimal. All Rights Reserved.</p>
                    </div>
                </div>

                {/* Chat Button */}
                <button className="absolute bottom-[72px] right-8 border-none bg-transparent cursor-pointer md:right-20 lg:bottom-14 lg:right-[108px]">
                    <img src={chatIcon} alt="chat icon" />
                </button>
            </div>
        </footer>
    )
}

export default Footer