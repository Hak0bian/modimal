import { decrementItemCount, incrementItemCount } from '../../store/slices/CartSlice/CartSlice'
import { useAppDispatch } from '../../store/hooks';
import minus from '../../assets/images/minimize.svg'
import plus from '../../assets/images/add.svg'


const CountAndPrice = ({ item }: { item: any }) => {
    const dispatch = useAppDispatch();

    return (
        <div className='grid grid-cols-3 text-[14px]'>
            <p>${item.unitPrice.toFixed(2)}</p>

        <div className='flex justify-center'>
            <div className="flex items-center text-[14px] bg-[#D1D9CF] w-17 h-6 justify-between">
                <button className="cursor-pointer" onClick={() => dispatch(decrementItemCount({ key: item.key }))}>
                    <img src={minus} alt="minus" />
                </button>
                <span>{item.count}</span>
                <button className="cursor-pointer" onClick={() => dispatch(incrementItemCount({ key: item.key }))}>
                    <img src={plus} alt="plus" />
                </button>
            </div>
        </div>

            <p className='text-right'>${item.totalPrice.toFixed(2)}</p>
        </div>
    )
}

export default CountAndPrice