import vector from '../../assets/images/Vector.svg'
import instaLogo from '../../assets/images/insta-icon.svg'
import fbLogo from '../../assets/images/fb-icon.svg'
import pintLogo from '../../assets/images/pint-icon.svg'
import tiktokLogo from '../../assets/images/tiktok-icon.svg'
import rightsLogo from '../../assets/images/original.svg'
import chatIcon from '../../assets/images/chat-icon.svg'

const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto mt-[48px] py-[52px] pb-[32px] bg-secordary text-primary">
            <div className="max-w-[1224px] mx-auto flex relative">
                <div className="w-[612px] pr-[104px]">
                    <h3 className="font-bold leading-[1.4] pb-[24px]">Join Our Club, Get 15% Off For Your Birthday</h3>
                    {/* Intut */}
                    <div className="flex border border-border px-[16px]">
                        <input type="text" placeholder="Enter Your Email Address"
                            className="w-[496px] h-[40px] bg-transparent border-none outline-none placeholder:text-lightgray text-primary"
                        />
                        <button className="bg-transparent border-none cursor-pointer">
                            <img src={vector} alt="vector" />
                        </button>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-[8px] pt-[16px]">
                        <input type="checkbox" className="w-[20px] h-[20px]" />
                        <p className="text-[12px] tracking-[0.8px] font-[600]">
                            By submitting your email, you agree to receive advertising emails from Modimal
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-[16px] pt-[104px] pb-[44px]">
                        {[instaLogo, fbLogo, pintLogo, tiktokLogo].map((icon, i) => (
                            <button key={i} className="bg-transparent border-none cursor-pointer">
                                <img src={icon} alt="social icon" />
                            </button>
                        ))}
                    </div>

                    {/* Rights */}
                    <div className="flex items-center gap-[8px]">
                        <img src={rightsLogo} alt="Rights Logo" />
                        <p className="text-[12px] text-lightgray">2023 modimal. All Rights Reserved.</p>
                    </div>
                </div>

                <div className="footerRight w-[560px] flex justify-between">
                    {/* About */}
                    <div>
                        <h3>About Modimal</h3>
                        <ul>
                            {['Collection', 'Sustainability', 'Privacy Policy', 'Support System', 'Terms & Condition', 'Copyright Notice'].map((item, i) => (
                                <li key={i}> {item} </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3>Help & Support</h3>
                        <ul>
                            {['Orders & Shipping', 'Returns & Refunds', 'FAQs', 'Contact Us'].map((item, i) => (
                                <li key={i}> {item} </li>
                            ))}
                        </ul>
                    </div>

                    {/* Join */}
                    <div>
                        <h3>Join Up</h3>
                        <ul>
                            {['Modimal Club', 'Careers', 'Visit Us'].map((item, i) => (
                                <li key={i}> {item} </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Chat Button */}
                <button className="absolute bottom-[24px] right-[0] border-none bg-transparent cursor-pointer">
                    <img src={chatIcon} alt="chat icon" />
                </button>
            </div>
        </footer>
    )
}

export default Footer