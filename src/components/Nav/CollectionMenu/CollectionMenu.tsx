import { NavLink } from "react-router-dom"
import blouses from "../../../assets/images/blouses.png"
import plusSize from "../../../assets/images/plus-size.png"

const CollectionMenu = ({collOpen} : {collOpen: boolean}) => {
    return (
        <>
            {/* <section
                className={`fixed inset-0 bg-black transition-opacity duration-300 z-20 
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            </section> */}

            <section className={`absolute left-0 w-[1440px] bg-primary transition-all duration-400
                    ${collOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
                <div className="flex justify-center pt-[32px] pb-[58px]">
                    {/* Left Columns */}
                    <div className="flex">
                        <div className="w-[184px] mr-[24px]">
                            <p className="text-[18px] text-black pb-[20px]">Category</p>
                            <ul>
                                <li className="collMenuItem"><NavLink to={'/shop-all'}>Shop All</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/blouses&top'}>Boluses & Top</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/pants'}>Pants</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/dresses&jumpsuits'}>Dresses & Jumpsuits</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/outwear&jackets '}>Outwear & Jackets </NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/pullovers'}>Pullovers</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/tees'}>Tees</NavLink></li>
                                <li className="collMenuItem"><NavLink to={'/shorts&skirts'}>Shorts & Skirts</NavLink></li>
                            </ul>
                        </div>
                        <div className="w-[104px] mr-[104px]">
                            <p className="text-[18px] text-black pb-[20px]">Featured</p>
                            <ul>
                                <li className="collMenuItem"><NavLink to="/Collection">Collection</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/new-in">New In</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/plus-size">Plus Size</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/best-seller">Best Seller</NavLink></li>
                            </ul>
                        </div>
                        <div className="w-[154px] mr-[54px]">
                            <p className="text-[18px] text-black pb-[20px]">More</p>
                            <ul>
                                <li className="collMenuItem"><NavLink to="/bundles">Bundles</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/occasion-wear">Occasion Wear</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/matching-set">Matching Set</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/plus-size">Plus Size</NavLink></li>
                                <li className="collMenuItem"><NavLink to="/suiting">Suiting</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Images */}
                    <div className="flex gap-[24px]">
                        <div>
                            <img src={blouses} alt="blouses image" className="w-[288px]"/>
                            <p className="leading-[1.8] mt-[12px]">Blouses</p>
                        </div>
                        <div>
                            <img src={plusSize} alt="plus size image" className="w-[288px]"/>
                            <p className="leading-[1.8] mt-[12px]">Plus Size</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CollectionMenu