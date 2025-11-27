import type { ICardInfoPropsType } from '../propsTypes'
import { classes } from '../../utils/tailwindClasses'
import favorite from '../../assets/images/favorite-icon.svg'
import { NavLink } from 'react-router-dom'

const BestSellersCard = ({cardInfo} : ICardInfoPropsType) => {
    return (
        <NavLink to={cardInfo.link}>
            <div className="releative">
                <div className="min-w-[152px] min-h-[214px] bg-cover aspect-3/4 xl:w-[392px] xl:h-[438px] xl:bg-center
                    [@media(min-width:768px)]:bg-[url('/img2.png')]" style={{backgroundImage: `url(${window.innerWidth <= 1024 ? cardInfo.bigImg : cardInfo.smallImg})`}}>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-[14px] font-semibold md:mt-1 xl:text-[16px] xl:font-bold xl:mt-1.5'>{cardInfo.title}</p>
                    <div className='text-[14px] sm:flex justify-between xl:text-[16px]'>
                        <p className=''>{cardInfo.about}</p>
                        <p className='font-semibold text-right pr-4 xl:font-bold'>{cardInfo.price}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button className={classes.collorBtn} style={{backgroundColor: cardInfo.color1}}></button>
                    <button className={classes.collorBtn} style={{backgroundColor: cardInfo.color2}}></button>
                    <button className={classes.collorBtn} style={{backgroundColor: cardInfo.color3}}></button>
                </div>
                <button className='absolute top-2 right-2 p-0.5 border-none bg-transparent cursor-pointer md:top-4 md:right-4 xl:top-6 xl:right-6'>
                    <img src={favorite} alt="favorite" />
                </button>
            </div>
        </NavLink>
    )
} 

export default BestSellersCard