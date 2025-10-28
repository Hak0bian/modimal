import { NavLink } from 'react-router-dom';
import bestOne from '../../assets/images/best1.png';
import bestTwo from '../../assets/images/best2.png';
import bestThree from '../../assets/images/best3.png';
import favorite from '../../assets/images/favorite-icon.svg'

const BestSellers = () => {
    return (
        <section className="max-w-[1224px] mx-auto">
            <div className="titleDiv">
                <h2>Best Sellers</h2>
                <NavLink to="/best-all" className="text-[14px] px-[16px] py-[8px]">View All</NavLink>
            </div>

            <div className="bestCardsDiv">
                {/* Card 1 */}
                <div className="flex flex-col relative">
                    <div className="bestImgDiv">
                        <img src={bestOne} alt="Tailored stretch" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className="bestTitle">Tailored stretch</p>
                        <div className="infoDiv">
                            <p>Turn It Up Pants</p>
                            <p className="price">$180</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="color bg-black"></button>
                            <button className="color bg-lightblue"></button>
                            <button className="color bg-green"></button>
                        </div>
                    </div>
                    <button className='absolute top-[24px] right-[24px] p-[2px] border-none bg-transparent cursor-pointer'>
                        <img src={favorite} alt="favorite" />
                    </button>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col relative">
                    <div className="bestImgDiv">
                        <img src={bestTwo} alt="Tailored stretch" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className="bestTitle">Technical Silk</p>
                        <div className="infoDiv">
                            <p>Make A Splash</p>
                            <p className="price">$120</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="color bg-violet"></button>
                            <button className="color bg-darkblue"></button>
                            <button className="color bg-black"></button>
                        </div>
                    </div>
                    <button className='absolute top-[24px] right-[24px] p-[2px] border-none bg-transparent cursor-pointer'>
                        <img src={favorite} alt="favorite" />
                    </button>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col relative">
                    <div className="bestImgDiv">
                        <img src={bestThree} alt="Tailored stretch" />
                    </div>
                    <div className="mainInfoDiv">
                        <p className="bestTitle">Cool Weave</p>
                        <div className="infoDiv">
                            <p>Anywhere Dress</p>
                            <p className="price">$210</p>
                        </div>
                        <div className="colorsDiv">
                            <button className="color bg-pink"></button>
                            <button className="color bg-violet"></button>
                            <button className="color bg-green"></button>
                        </div>
                    </div>
                    <button className='absolute top-[24px] right-[24px] p-[2px] border-none bg-transparent cursor-pointer'>
                        <img src={favorite} alt="favorite" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;