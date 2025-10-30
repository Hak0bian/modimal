import { NavLink } from "react-router-dom"
import full from "../../../assets/images/new1.png"
import boluses from "../../../assets/images/new2.png"
import dresses from "../../../assets/images/new3.png"

const NewInManu = ({newOpen} : {newOpen: boolean}) => {
    return (
        <section className={`absolute left-0 w-[1440px] bg-primary transition-all duration-400
                ${newOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
            <div className="flex justify-center pt-[32px] pb-[58px]">
                {/* Left Columns */}
                <div className="flex">
                    <div className="w-[184px] mr-[24px]">
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
                    <div className=" mr-[220px]">
                        <p className="text-[18px] text-black pb-[20px]">Tranding</p>
                        <ul>
                            <li className="collMenuItem"><NavLink to="/plus-size">Plus Size</NavLink></li>
                            <li className="collMenuItem"><NavLink to="/Collection">Full Collection</NavLink></li>
                            <li className="collMenuItem"><NavLink to="/modiWeek">ModiWeek</NavLink></li>
                        </ul>
                    </div>
                </div>

                {/* Right Images */}
                <div className="flex gap-[24px]">
                    <div>
                        <img src={full} alt="blouses image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Full Collection</p>
                    </div>
                    <div>
                        <img src={boluses} alt="plus size image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Boluses</p>
                    </div>
                    <div>
                        <img src={dresses} alt="plus size image" className="w-[208px]"/>
                        <p className="leading-[1.8] mt-[12px]">Dresses</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewInManu