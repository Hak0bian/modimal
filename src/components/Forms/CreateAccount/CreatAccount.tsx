import { NavLink } from "react-router-dom";
import { useState } from "react";
import { classes } from "../../../utils/tailwindClasses";
import registerImg from '../../../assets/images/register-img.png'
import registerSmallImg from '../../../assets/images/register-img-small.png'
import RegisterForm from "./RegisterForm";
import FormsIcons from "../FormsIcons/FormsIcons";
import WelcomeModal from "./WelcomeModal";


const CreatAccount = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <section className="pt-8 pb-6 sm:pb-12">
            <img src={registerSmallImg} alt="Register image" className="sm:hidden mb-8"/>
            <div className="px-5 text-[12px] xs:px-13 sm:px-5 md:px-10 lg:px-20 lg:text-[14px] xl:pl-[108px]">
                <h3 className={classes.formsTitle}>Creat Account</h3>
                <div className="sm:flex gap-5 md:gap-10 lg:gap-20 xl:gap-32 sm:items-center">
                    <img src={registerImg} alt="Register image" className="hidden sm:block max-w-[600px] w-[50%]"/>
                    
                    <div className="sm:w-[50%] lg:w-[392px] flex flex-col">
                        <RegisterForm setOpenModal={setOpenModal}/>
                        <div className="w-full flex flex-col items-center text-center text-[12px]">
                            <FormsIcons />
                            <p className="max-w-[380px] mt-4 lg:mt-6 text-[10px] mdx:text-[12px]">
                                <span>By Clicking Register Now You Agree To </span>
                                <NavLink to='/terms&conditions' className="text-bg_green">Terms & Conditions</NavLink>
                                <span> And </span>
                                <NavLink to='/privacy-policy' className="text-bg_green underline">Privacy Policy</NavLink>. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <WelcomeModal open={openModal} setOpenModal={setOpenModal}/>
        </section>
    )
}

export default CreatAccount