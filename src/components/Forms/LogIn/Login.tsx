import { NavLink } from "react-router-dom";
import { useState } from "react";
import { classes } from "../../../utils/tailwindClasses";
import registerImg from '../../../assets/images/register-img.png'
import registerSmallImg from '../../../assets/images/register-img-small.png'
import LoginForm from "./LoginForm";
import VerifyEmailModal from "./VerifyEmailModal";
import FormsIcons from "../FormsIcons/FormsIcons";


const Login = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <section className="pt-8 pb-6 sm:pb-12">
            <img src={registerSmallImg} alt="Register image" className="sm:hidden mb-8"/>
            <div className="px-5 text-[12px] xs:px-13 sm:px-5 md:px-10 lg:px-20 lg:text-[14px] xl:pl-[108px]">
                <h3 className={classes.formsTitle}>Log In</h3>
                <div className="sm:flex gap-5 md:gap-10 lg:gap-20 xl:gap-32 sm:items-center">
                    <img src={registerImg} alt="Register image" className="hidden sm:block max-w-[600px] w-[50%]"/>
                    
                    <div className="sm:w-[50%] lg:w-[392px] flex flex-col">
                        <LoginForm setOpenModal={setOpenModal}/>
                        <div className="w-full flex flex-col items-center text-center text-[12px] md:text-[14px] xl:text-[16px]">
                            <FormsIcons />
                            <p className="max-w-[380px] mt-4 lg:mt-6">
                                <span>New To Modimal? </span>
                                <NavLink to='/register' className="text-bg_green">Create An Account</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <VerifyEmailModal open={openModal} setOpenModal={setOpenModal}/>
        </section>
    )
}

export default Login