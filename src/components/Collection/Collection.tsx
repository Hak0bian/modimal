import coll1 from '../../assets/images/collection1.png';
import coll2 from '../../assets/images/collection2.png';
import coll3 from '../../assets/images/collection3.png';
import coll4 from '../../assets/images/collection4.jpg';

const Collection = () => {
    return (
        <section>
            <div className='w-90 xl:w-[1224px] m-auto px-5'> 
                <div className='mt-5 mb-2 xs:mt-15 xs:mb-4 xl:mt-22 xl:mb-6'>
                    <h2 className='text-[20px] font-bold leading-[1.4] md:text-[24px] xl:text-[32px] xl:font-semibold'>Collection</h2>
                </div>

                <div className='flex gap-4 md:gap-5 xl:gap-6'>
                    <div>
                        <div className='mb-6 xl:mb-16 xl:relative'>
                            <div>
                                <img src={coll1} alt="collection one" className='w-[152px] h-[165px] object-cover md:w-[370px] md:h-[340px] xl:w-150 xl:h-[518px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Boluses</button>
                        </div>
                        <div className='xl:relative'>
                            <div>
                                <img src={coll2} alt="collection one" className='w-[152px] h-[254px] object-cover md:w-[370px] md:h-[540px] xl:w-150 xl:h-[838px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Dresses</button>
                        </div>
                    </div>

                    <div>
                        <div className='mb-8 xl:mb-36 xl:relative'>
                            <div>
                                <img src={coll3} alt="collection one" className='w-[152px] h-[276px] object-cover md:w-[370px] md:h-[540px] xl:w-150 xl:h-[840px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Pants</button>
                        </div>
                        <div className='xl:relative'>
                            <div>
                                <img src={coll4} alt="collection one" className='w-[152px] h-[135px] object-cover md:w-[370px] md:h-[332px] xl:w-150 xl:h-[436px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Outwears</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex gap-4 md:gap-5 xl:gap-6'>
                    <div>
                        <div className='mb-6 xl:mb-16 xl:relative'>
                            <div>
                                <img src={coll1} alt="collection one" className='min-w-[152px] min-h-[165px] object-cover md:w-[370px] md:h-[340px] xl:w-150 xl:h-[518px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Boluses</button>
                        </div>
                        <div className='xl:relative'>
                            <div>
                                <img src={coll2} alt="collection one" className='w-[152px] h-[254px] object-cover md:w-[370px] md:h-[540px] xl:w-150 xl:h-[838px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Dresses</button>
                        </div>
                    </div>

                    <div>
                        <div className='mb-8 xl:mb-36 xl:relative'>
                            <div>
                                <img src={coll3} alt="collection one" className='w-[152px] h-[276px] object-cover md:w-[370px] md:h-[540px] xl:w-150 xl:h-[840px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Pants</button>
                        </div>
                        <div className='xl:relative'>
                            <div>
                                <img src={coll4} alt="collection one" className='w-[152px] h-[135px] object-cover md:w-[370px] md:h-[332px] xl:w-150 xl:h-[436px]'/>
                            </div>
                            <button className='text-[14px] h-10 bg-primary right-4 bottom-4 ml-4 cursor-pointer xl:absolute xl:w-[185px]'>Outwears</button>
                        </div>
                    </div>
                </div> */}
        </section>
    )
}

export default Collection