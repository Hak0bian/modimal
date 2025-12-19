import chat from '../assets/images/chat.svg'
import call from '../assets/images/contact_phone.svg'
import email from '../assets/images/mail.svg'
import write from '../assets/images/email.svg'


export const filters = {
    sort: [
        { label: 'Rating: Low To High', value: 'Rating(L-H)' },
        { label: 'Rating: High To Low', value: 'Rating(H-L)' },
        { label: 'Price: Low To High', value: 'Price(L-H)' },
        { label: 'Price: High To Low', value: 'Price(H-L)' },
    ],
    size: [
        { label: 'XS / US (0-4)', value: 'XS' },
        { label: 'S / US (4-6)', value: 'S' },
        { label: 'M / US (6-10)', value: 'M' },
        { label: 'L / US (10-14)', value: 'L' },
        { label: 'XL / US (12-16)', value: 'XL' },
    ],
    colors: [
        { label: "Black", value: "Black", color: "#0C0C0C" },
        { label: "Red", value: "Red", color: "#CA2929" },
        { label: "Green", value: "Green", color: "#748C70" },
        { label: "Yellow", value: "Yellow", color: "#909225" },
        { label: "Dark Blue", value: "Dark Blue", color: "#19418E" },
        { label: "Purple", value: "Purple", color: "#D0A5EA" },
        { label: "Pink", value: "Pink", color: "#CA2980" },
        { label: "Light Blue", value: "Light Blue", color: "#7DC3EB" },
        { label: "Orange", value: "Orange", color: "#CA6D29" },
        { label: "White", value: "White", color: "#FFFFFF", border: true }
    ],
    type: [
        { label: 'Jacket', value: 'jacket' },
        { label: 'T-shirt', value: 't-shirt' },
        { label: 'Jeans', value: 'jeans' },
        { label: 'Top', value: 'top' },
        { label: 'Gown', value: 'gown' },
        { label: 'Set', value: 'set' },
    ],
    brand: [
        { label: 'FashionTrend', value: 'FashionTrend' },
        { label: 'TrendyTees', value: 'TrendyTees' },
        { label: 'DenimCo', value: 'DenimCo' },
        { label: 'UrbanVibe', value: 'UrbanVibe' },
        { label: 'CasualChic', value: 'CasualChic' },
    ],
    category: [
        { label: 'Women', value: 'Women' },
        { label: 'Men', value: 'Men' },
        { label: 'Kids', value: 'Kids' },
    ],
};


export const colors = [
    { label: "Black", value: "Black", color: "#0C0C0C" },
    { label: "Red", value: "Red", color: "#CA2929" },
    { label: "Green", value: "Green", color: "#748C70" },
    { label: "Yellow", value: "Yellow", color: "#909225" },
    { label: "Dark Blue", value: "Dark Blue", color: "#19418E" },
    { label: "Purple", value: "Purple", color: "#D0A5EA" },
    { label: "Pink", value: "Pink", color: "#CA2980" },
    { label: "Light Blue", value: "Light Blue", color: "#7DC3EB" },
    { label: "Orange", value: "Orange", color: "#CA6D29" },
    { label: "White", value: "White", color: "#FFFFFF", border: true }
];


export const contactUs = [
    {
        type: "write",
        title: (
            <div className="flex gap-1" >
                <img src={write} alt="write" />
                <h3>Write Us </h3>
            </div>
        ),
        content: (
            <div className="text-center text-[14px outline-0]" >
                <input type="text" placeholder="First Name" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                <input type="email" placeholder="Email" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                <input type="text" placeholder="Subject" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                <input type="text" placeholder="Order Number" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                <input type="text" placeholder="Message" className="w-full h-10 border-b border-[#808080] px-4 placeholder:text-[12px] outline-0" />
                <div className="flex gap-2 items-center mt-1 mb-8" >
                    <input type="checkbox" className="w-4 h-4" />
                    <p className="leading-none text-[12px] pt-2 text-left" >I have read and understood the contact us privacy and policy.</p>
                </div>
                < button className="w-[300px] h-10 bg-bg_green text-primary" >Send</button>
            </div>
        )
    },
    {
        title: (
            <div className="flex gap-1" >
                <img src={chat} alt="chat" />
                <h3>Chat With Us </h3>
            </div>
        ),
        content: (
            <div className="text-center text-[14px]" >
                <p className="pb-2">We Are Here And Ready To Chat</p>
                <button className="w-[300px] h-10 border border-[#5A6D57] text-[#5A6D57]">Start Chat</button>
            </div>
        )
    },
    {
        title: (
            <div className="flex gap-1" >
                <img src={call} alt="call" />
                <h3>Call Us </h3>
            </div>
        ),
        content: (
            <div className="text-center text-[14px]" >
                <p className="pb-2">We're Here To Talk To You</p>
                <button className="w-[300px] h-10 border border-[#5A6D57] text-[#5A6D57]">+1(929)460 - 3208</button>
            </div>
        )
    },
    {
        title: (
            <div className="flex gap-1" >
                <img src={email} alt="email" />
                <h3>Email Us </h3>
            </div>
        ),
        content: (
            <div className="text-center text-[14px]" >
                <p className="pb-2">You are welcome to send us an email</p>
                <button className="w-[300px] h-10 border border-[#5A6D57] text-[#5A6D57]">Send Email</button>
            </div>
        )
    }
]