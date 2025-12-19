import { NavLink } from "react-router-dom"
import ContactUsAcc from "../components/ContactUs/ContactUsAcc"
import ContactUsDesc from "../components/ContactUs/ContactUsDesc"


const ContactUsPage = () => {
    return (
        <div className="max-w-[1224px] mx-auto">
            <div className="flex gap-3 text-[12px] px-5 py-6 sm:text-[14px] md:text-[16px] lg:text-[18px] lg:pt-8 lg:pb-12">
                <NavLink to='/' className='text-bg_green'>Home</NavLink>
                <span>/</span>
                <span>Contact Us</span>
            </div>
            <div className="px-5 mb-8">
                <h2 className="text-[24px] font-bold pb-3 lg:text-[32px]">Contact Us</h2>
                <div className="px-4 py-2 text-[14px] bg-[#F0F2EF] flex flex-col gap-6 lg:text-[16px]">
                    <p>We always love hearing from our customers! Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.</p>
                    <p>Contact our Customer Care team through the contact form below, email us at hello@modimal.com or live chat with us via our chat widget on the bottom right hand corner of this page.</p>
                    <p>We will aim to respond to you within 1-2 business days.</p>
                </div>
            </div>
            <ContactUsAcc />
            <ContactUsDesc />
        </div>
    ) 
}

export default ContactUsPage