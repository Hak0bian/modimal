import { NavLink } from 'react-router-dom'
import bestOne from '../../assets/images/best1.png'
import bestTwo from '../../assets/images/best2.png'
import bestThree from '../../assets/images/best3.png'
import './BestSellers.css'

const BestSellers = () => {
    return (
        <section className='bestSection'>
            <div className="titleDiv">
                <h2>Best Sellers</h2>
                <NavLink to={'/best-all'}>View All</NavLink>
            </div>

            <div className="bestCardsDiv">
                <div className="bestCard">
                    <div className="bestImgDiv">
                        <img src={bestOne} alt="Tailored stretch" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className='bestTitle'>Tailored stretch</p>
                        <div className="infoDiv">
                            <p>Turn It Up Pants</p>
                            <p className='price'>$180</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="black"></button>
                            <button className="lightblue"></button>
                            <button className="green"></button>
                        </div>
                    </div>
                </div>

                <div className="bestCard">
                    <div className="bestImgDiv">
                        <img src={bestTwo} alt="Technical Silk" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className='bestTitle'>Technical Silk</p>
                        <div className="infoDiv">
                            <p className='info'>Make A Splash</p>
                            <p className='price'>$120</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="olivie"></button>
                            <button className="darkblue"></button>
                            <button className="black"></button>
                        </div>
                    </div>
                </div>

                <div className="bestCard">
                    <div className="bestImgDiv">
                        <img src={bestThree} alt="Cool Weave" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className='bestTitle'>Cool Weave</p>
                        <div className="infoDiv">
                            <p className='info'>Anywhere Dress</p>
                            <p className='price'>$210</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="pink"></button>
                            <button className="olivie"></button>
                            <button className="green"></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSellers