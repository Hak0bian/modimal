import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import type { IModalsPropsType } from '../../propsTypes';

const VerifyEmailModal = ({open, setOpenModal} : IModalsPropsType) => {
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <DialogContent>
                <IconButton onClick={handleClose} sx={{position: 'absolute', top: 4, left: 4, color: 'black'}}>
                    <CloseIcon sx={{ fontSize: '24px' }} />
                </IconButton>
                <div className='flex flex-col items-center px-5 pt-8 pb-14'>
                    <div className='text-[12px] max-w-[400px] text-center capitalize sm:text-[14px] md:text-[16px] lg:text-[18px] md:max-w-[500px] lg:max-w-[600px]'>
                        <h3 className='text-[16px] font-bold pb-6 sm:text-[24px] md:pb-8 lg:text-[32px] lg:pb-10'>Verify Your Email</h3>
                        <p className='pb-6 md:pb-8 lg:pb-10'>
                            We’ve sent an email to nina@gmail.com to verify your email address and activate your account. the link in the email will expire in 24 hours.
                        </p>
                        <p>
                            <button onClick={handleClose} className='text-bg_green cursor-pointer'>
                                <NavLink to='/register'>Click Here</NavLink>
                            </button>
                            <span> if you did not receive an email or would like to change the email address you registered with</span>
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default VerifyEmailModal