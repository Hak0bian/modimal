import blouses from "../../../../assets/images/blouses.png"
import plusSize from "../../../../assets/images/plus-size.png"
import { NavLink } from 'react-router-dom'

const CollectionDropDown = () => {
    return (
        <section className="w-screen xl:w-[1440px] m-auto hidden lg:block">
            <div className="flex px-10 xl:px-[108px] justify-center">
                <div className="flex">
                    <div className="w-[184px] mr-0 xl:mr-6">
                        <p className="text-[14px] xl:text-[18px] text-black pb-5">Category</p>
                        <ul className="flex flex-col gap-y-2 text-secondary text-nowrap">
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/pants'}>Pants</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/outwear&jackets'}>Outwear & Jackets</NavLink></li> 
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/tees'}>Tees</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-[104px] mr-20 xl:mr-[104px]">
                        <p className="text-[14px] xl:text-[18px] text-black pb-5">Featured</p>
                        <ul className="flex flex-col gap-y-2 text-secondary text-nowrap">
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/new-in">New In</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/best-seller">Best Seller</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-[154px] mr-0 xl:mr-[54px]">
                        <p className="text-[14px] xl:text-[18px] text-black pb-5">More</p>
                        <ul className="flex flex-col gap-y-2 text-secondary text-nowrap">
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/bundles">Bundles</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/occasion-wear">Occasion Wear</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/matching-set">Matching Set</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className="text-[14px] xl:text-[18px] leading-[1.8]"><NavLink to="/suiting">Suiting</NavLink></li>
                        </ul>
                    </div>
                </div>

               
                <div className="flex gap-4 xl:gap-6">
                    <div>
                        <img src={blouses} alt="blouses image" className="w-[200px] xl:w-[288px]" />
                        <p className="text-[14px] leading-[1.8] mt-3 xl:text-[16px]">Blouses</p>
                    </div>
                    <div>
                        <img src={plusSize} alt="plus size image" className="w-[200px] xl:w-[288px]" />
                        <p className="text-[14px] leading-[1.8] mt-3 xl:text-[16px]">Plus Size</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CollectionDropDown