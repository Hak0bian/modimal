import { NavLink } from 'react-router-dom'
import chatIcon from '../../assets/images/chat-icon.svg'
import FootMainContent from './FootMainContent'
import FooterIcons from './FooterIcons'

const Footer = () => {
    return (
        <footer className='max-w-[1440px] mx-auto bg-secondary text-primary flex justify-center relative'>
            <div className='flex flex-col gap-6 px-5 pt-8 pb-10 mdx:px-0'>
                <FootMainContent />
                <FooterIcons/>
                
                <NavLink to='/contact-us'>
                    <button className="absolute bottom-[72px] right-8 border-none bg-transparent cursor-pointer md:right-20 lg:bottom-14 lg:right-[108px]">
                        <img src={chatIcon} alt="chat icon" />
                    </button>
                </NavLink>
            </div>
        </footer>
    )
}

export default Footer