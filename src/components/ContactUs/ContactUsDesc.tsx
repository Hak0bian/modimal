import write from '../../assets/images/email.svg'
import chat from '../../assets/images/chat.svg'
import call from '../../assets/images/contact_phone.svg'
import email from '../../assets/images/mail.svg'


const ContactUsDesc = () => {
    return (
        <div className="hidden mdx:block">
            <div className='w-full max-w-250 mx-auto px-5'>
                <div className="flex gap-2" >
                    <img src={write} alt="write" />
                    <h3 className='text-[20px] xl:text-[24px] font-bold'>Write Us </h3>
                </div>
                <div className="text-center text-[14px]" >
                    <p className='text-[16px] xl:text-[20px] font-bold text-left pt-5 pb-2 xl:pt-8 xl:pb-4'>Your Information</p>
                    <input type="text" placeholder="First Name" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                    <input type="email" placeholder="Email" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                    <input type="text" placeholder="Subject" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                    <input type="text" placeholder="Order Number" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                    <input type="text" placeholder="Message" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                    <div className="flex gap-2 items-center mt-3 mb-8" >
                        <input type="checkbox" className="w-4 h-4" />
                        <p className="leading-none text-[12px] text-left" >I have read and understood the contact us privacy and policy.</p>
                    </div>
                    <div className='text-right'>
                        <button className="w-[300px] h-10 bg-bg_green text-primary" >Send</button>
                    </div>
                </div>
            </div>

            <div className='pt-20 pb-10 mx-5 flex gap-4'>
                <div className='w-full min-w-[250px] max-w-100 text-center bg-[#F0F2EF] py-3 px-4'>
                    <div className="flex flex-col items-center gap-3 pb-3">
                        <img src={chat} alt="chat" />
                        <h3 className='font-bold'>Chat With Us</h3>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                        <p>We Are Here And Ready To Chat</p>
                        <button className="w-full h-10 border border-[#5A6D57] text-[#5A6D57] mt-3">Start Chat</button>
                    </div>
                </div>

                <div className='w-full min-w-[250px] max-w-100 text-center bg-[#F0F2EF] py-3 px-4'>
                    <div className="flex flex-col items-center gap-3 pb-3">
                        <img src={call} alt="chat" />
                        <h3 className='font-bold'>Call Us</h3>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                        <p>We're Here To Talk To You</p>
                        <button className="w-full h-10 border border-[#5A6D57] text-[#5A6D57] mt-3"> +1(929)460 - 3208 </button>
                    </div>
                </div>

                <div className='w-full min-w-[250px] max-w-100 text-center bg-[#F0F2EF] py-3 px-4'>
                    <div className="flex flex-col items-center gap-3 pb-3">
                        <img src={email} alt="chat" />
                        <h3 className='font-bold'>Email Us </h3>
                    </div>
                    <div className="text-[12px] lg:text-[14px]">
                        <p>You are welcome to send us an email</p>
                        <button className="w-full h-10 border border-[#5A6D57] text-[#5A6D57] mt-3">Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsDesc