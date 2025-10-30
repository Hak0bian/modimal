import favorite from "../../assets/images/favorite-icon.svg"

const ModiweekCard = ({img, day} : { img: string; day: string }) => {
    return (
        <div className="w-[288px]">
            <img src={img} alt="Sunday Image" className='w-full h-[426px] object-cover' />
            <p className='leading-[1.4] font-[700] pt-[36px] px-[8px] pb-[6px]'>{day}</p>
            <button className='absolute top-[24px] right-[24px] p-[2px] border-none bg-transparent cursor-pointer'>
                <img src={favorite} alt="favorite" />
            </button>
        </div>
    )
}

export default ModiweekCard