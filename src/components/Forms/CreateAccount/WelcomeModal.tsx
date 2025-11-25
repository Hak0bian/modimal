import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { classes } from '../../../utils/tailwindClasses';
import type { IModalsPropsType } from '../../propsTypes';

const WelcomeModal = ({ open, setOpenModal }: IModalsPropsType) => {
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <DialogContent>
                <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 4, left: 4, color: 'black' }}>
                    <CloseIcon sx={{ fontSize: '24px' }} />
                </IconButton>
                <div className='flex flex-col items-center text-center text-nowrap gap-6 px-5 py-10 leading-loose lg:gap-8 lg:py-[70px]'>
                    <h3 className='text-[20px] font-bold sm:text-[24px] lg:text-[32px]'>Welcome to Modimal</h3>
                    <p className='font-sansmt italic sm:text-[20px] lg:text-[24px]'>Elegance in simplicity, Earth’s harmony</p>
                    <p className='text-[12px] font-semibold sm:text-[18px] lg:text-[24px] lg:font-bold'>is it your first experience on modimal?</p>
                    <button className={classes.modalBtn}>Create Your Own Style</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default WelcomeModal