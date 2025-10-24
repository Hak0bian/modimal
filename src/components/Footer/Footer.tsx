import vector from '../../assets/images/Vector.svg'
import instaLogo from '../../assets/images/insta-icon.svg'
import fbLogo from '../../assets/images/fb-icon.svg'
import pintLogo from '../../assets/images/pint-icon.svg'
import tiktokLogo from '../../assets/images/tiktok-icon.svg'
import rightsLogo from '../../assets/images/original.svg'
import chatIcon from '../../assets/images/chat-icon.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footerContainer">
                <div className="footerLeft">
                    <h3 className='joinText'>Join Our Club, Get 15% Off For Your Birthday</h3>
                    <div className='inputDiv'>
                        <input type="text" placeholder='Enter Your Email Address'/>
                        <button> <img src={vector} alt="vector" /> </button>
                    </div>
                    <div className='agreeDiv'>
                        <input type="checkbox" />
                        <p>By Submittng your email, you agree to receive advertising emails from Modimal</p>
                    </div>

                    <div className="socialMediaDiv">
                        <button>
                            <img src={instaLogo} alt="Instagram" />
                        </button>
                        <button>
                            <img src={fbLogo} alt="Facebook" />
                        </button>
                        <button>
                            <img src={pintLogo} alt="Pinterest" />
                        </button>
                        <button>
                            <img src={tiktokLogo} alt="TikTok" />
                        </button>
                    </div>
                    <div className="rightsTextDiv">
                        <img src={rightsLogo} alt="Rights Logo" />
                        <p>2023 modimal. All Rights Reserved.</p>
                    </div>
                </div>

                <div className='footerRight'>
                    <div className="aboutDiv">
                        <h3>About Modimal</h3>
                        <ul>
                            <li>Collection</li>
                            <li>Sustainability</li>
                            <li>Privacy Policy</li>
                            <li>Support System</li>
                            <li>Terms & Condition</li>
                            <li>Copyright Notice</li>
                        </ul>
                    </div>

                    <div className="helpDiv">
                        <h3>Help & Support</h3>
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Returns & Refunds</li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="joinDiv">
                        <h3>Join Up</h3>
                        <ul>
                            <li>Modimal Club</li>
                            <li>Careers</li>
                            <li>Visit Us</li>
                        </ul>
                    </div>
                    <button className='chat'> <img src={chatIcon} alt="chat icon" /> </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer