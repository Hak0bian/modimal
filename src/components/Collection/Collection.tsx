import { classes } from '../../utils/tailwindClasses';
import coll1 from '../../assets/images/collection1.png';
import coll2 from '../../assets/images/collection2.png';
import coll3 from '../../assets/images/collection3.png';
import coll4 from '../../assets/images/collection4.jpg';

const Collection = () => {
    return (
        <section>
            <div className="w-full max-w-[1224px] mx-auto px-5 xl:px-0">
                <div className="mt-5 mb-2 xs:mt-15 xs:mb-4 xl:mt-22 xl:mb-6">
                    <h2 className="text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold">Collection</h2>
                </div>
                
                <div className="flex justify-between gap-4 md:gap-5 xl:gap-6">
                    {/* Left column */}
                    <div className="flex flex-col justify-between gap-6 flex-1 lg:gap-10 xl:gap-16">
                        <div className="sm:relative">
                            <img src={coll1} alt="collection one" className="object-cover w-full h-[165px] xs:h-60 md:h-[360px] xl:h-[518px]" />
                            <button className={classes.collectionBtn}>Boluses</button>
                        </div>

                        <div className="sm:relative">
                            <img src={coll2} alt="collection two" className="object-cover w-full h-[254px] xs:h-[360px] md:h-[540px] xl:h-[840px]" />
                            <button className={classes.collectionBtn}>Dresses</button>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col justify-between gap-8 sm:gap-4 flex-1 lg:gap-10 xl:gap-36">
                        <div className="sm:relative">
                            <img src={coll3} alt="collection three" className="object-cover w-full h-[276px] xs:h-[360px] md:h-[540px] xl:h-[840px]" />
                            <button className={`${classes.collectionBtn} sm:left-4`}>Pants</button>
                        </div>

                        <div className="sm:relative">
                            <img src={coll4} alt="collection four" className="object-cover w-full h-[135px] xs:h-60 md:h-80 xl:h-[436px]" />
                            <button className={classes.collectionBtn}>Outwears</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection