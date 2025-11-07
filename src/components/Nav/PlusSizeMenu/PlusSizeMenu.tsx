import { NavLink } from 'react-router-dom'
import plus1 from '../../../assets/images/plus1.png'
import plus2 from '../../../assets/images/plus2.png'
import plus3 from '../../../assets/images/plus3.png'

const PlusSizeMenu = ({closeMenu}: {closeMenu: () => void}) => {
    return (
        <section onClick={closeMenu} className={"w-[1440px] bg-primary"}>
            <div onClick={(e) => e.stopPropagation()} className="w-[1224px] mx-auto flex justify-between pt-[32px] pb-[58px]">
                {/* Left Columns */}
                <div className="flex">
                    <div className="w-[184px] mr-[264px]">
                        <p className="text-[18px] text-black pb-[20px]">Category</p>
                        <ul>
                            <li className="collMenuItem"><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/tees'}>Tees</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/pants'}>Pants</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                            <li className="collMenuItem"><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex gap-[24px]">
                    <div>
                        <img src={plus1} alt="blouses image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Pants</p>
                    </div>
                    <div>
                        <img src={plus2} alt="plus size image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Dresses</p>
                    </div>
                    <div>
                        <img src={plus3} alt="plus size image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Blouses</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlusSizeMenu