import { NavLink } from 'react-router-dom'
import sustain1 from '../../../assets/images/sustain1.png'
import sustain2 from '../../../assets/images/sustain2.png'

const SustainabilityMenu = ({sustainOpen} : {sustainOpen: boolean}) => {
    return (
        <section className={`absolute left-0 w-[1440px] bg-primary transition-all duration-400
                ${sustainOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
            <div className="max-w-[1224px] mx-auto flex justify-between pt-[32px] pb-[58px]">
                {/* Left Columns */}
                <div className="flex">
                    <div className="w-[184px] mr-[264px]">
                        <p className="text-[18px] text-black pb-[20px]">Sustainability </p>
                        <ul>
                            <li className="collMenuItem"><NavLink to={'/mission'}>Mission</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/processing'}>Processing</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/materials'}>Materials</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/packaging '}>Packaging</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/product-care'}>Product Care</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/our-suppliers'}>Our Suppliers</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex gap-[24px]">
                    <div>
                        <img src={sustain1} alt="blouses image" className="w-[398px]"/>
                    </div>
                    <div>
                        <img src={sustain2} alt="plus size image" className="w-[398px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SustainabilityMenu