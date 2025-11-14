import { NavLink } from 'react-router-dom'
import sustain1 from '../../../../assets/images/sustain1.png'
import sustain2 from '../../../../assets/images/sustain2.png'

const SustainDropDown = () => {
    return (
        <div className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className='flex px-10 xl:px-[108px] justify-center'>
                <div className="flex">
                    <div className="w-[184px] mr-40 xl:mr-[264px]">
                        <p className="text-[14px] xl:text-[18px] text-black pb-5">Sustainability </p>
                        <ul className='flex flex-col gap-y-2 text-secondary text-nowrap'>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/mission'}>Mission</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/processing'}>Processing</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/materials'}>Materials</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/packaging '}>Packaging</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/product-care'}>Product Care</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/our-suppliers'}>Our Suppliers</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={sustain1} alt="blouses image" className="w-[290px] xl:w-[398px]" />
                    </div>
                    <div>
                        <img src={sustain2} alt="plus size image" className="w-[290px] xl:w-[398px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SustainDropDown