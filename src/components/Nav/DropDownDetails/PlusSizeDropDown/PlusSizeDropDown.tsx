import plus1 from '../../../../assets/images/plus1.png'
import plus2 from '../../../../assets/images/plus2.png'
import plus3 from '../../../../assets/images/plus3.png'
import { NavLink } from 'react-router-dom'

const PlusSizeDropDown = () => {
    return (
        <div className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className='flex px-10 xl:px-[108px] justify-center'>
                <div className="flex">
                    <div className="w-[184px] mr-49 xl:mr-[366px]">
                        <p className="text-[14px] xl:text-[18px] text-black pb-5">Category</p>
                        <ul className='flex flex-col gap-y-2 text-secondary text-nowrap'>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/tees'}>Tees</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/pants'}>Pants</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={plus1} alt="blouses image" className="w-44 xl:w-52" />
                        <p className="text-[14px] leading-[1.8] mt-3 xl:text-[16px]">Pants</p>
                    </div>
                    <div>
                        <img src={plus2} alt="plus size image" className="w-44 xl:w-52" />
                        <p className="text-[14px] leading-[1.8] mt-3 xl:text-[16px]">Dresses</p>
                    </div>
                    <div>
                        <img src={plus3} alt="plus size image" className="w-44 xl:w-52" />
                        <p className="text-[14px] leading-[1.8] mt-3 xl:text-[16px]">Blouses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusSizeDropDown