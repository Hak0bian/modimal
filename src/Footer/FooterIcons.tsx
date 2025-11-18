import instaLogo from '../../src/assets/images/insta-icon.svg'
import fbLogo from '../../src/assets/images/fb-icon.svg'
import pintLogo from '../../src/assets/images/pint-icon.svg'
import tiktokLogo from '../../src/assets/images/tiktok-icon.svg'
import rightsLogo from '../../src/assets/images/original.svg'

const FooterIcons = () => {
    return (
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
                <img src={rightsLogo} alt="Rights Logo" className='w-3.5' />
                <p className="text-[10px] text-lightgray h-[18px] md:text-[12px]">2023 modimal. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default FooterIcons