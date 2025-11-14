import favorite from "../../assets/images/favorite-icon.svg"

const ModiweekCard = ({img, day} : { img: string; day: string }) => {
    return (
        <div>
            <img src={img} alt={day} className='min-w-[152px] min-h-[242px] aspect-3/4 object-cover xl:w-[288px] xl:h-[426px]'/>
            <div className="md:pt-1 xl:pt-10">
                <p className="text-[14px] font-semibold xl:text-[16px]">{day}</p>
                <button className='absolute top-2 right-2 p-0.5 border-none bg-transparent cursor-pointer md:top-4 md:right-4 xl:top-6 xl:right-6'>
                    <img src={favorite} alt="favorite"/>
                </button>
            </div>
        </div>
    )
}

export default ModiweekCard