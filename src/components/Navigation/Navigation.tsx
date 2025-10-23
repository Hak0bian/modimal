import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import searchLogo from '../../assets/images/search-icon.svg'
import profileLogo from '../../assets/images/profile-icon.svg'
import favoriteLogo from '../../assets/images/favorite-icon.svg'
import bagLogo from '../../assets/images/bag-icon.svg'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className='navTopDiv'>
                    <p>Enjoy Free Shipping On All Orders</p>
                </div>
                <div className='navMainDiv'>
                    <div className="logoDiv">
                        <img src={logo} alt="logo" className='logo'/>
                        <p className='logoText'>women clothing</p>
                    </div>

                    <div className="navMenuDiv">
                        <NavLink to={'/Collection'}>Collection</NavLink>
                        <NavLink to={'/NewIn'}>New In</NavLink>
                        <NavLink to={'/ModiWeek'}>ModiWeek</NavLink>
                        <NavLink to={'/PlusSize'}>Plus Size</NavLink>
                        <NavLink to={'/Sustainability'}>Sustainability</NavLink>
                    </div>

                    <div className="navIconsDiv">
                        <img src={searchLogo} alt="searchLogo" />
                        <img src={profileLogo} alt="profileLogo" />
                        <img src={favoriteLogo} alt="favoriteLogo" />
                        <img src={bagLogo} alt="bagLogo" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation