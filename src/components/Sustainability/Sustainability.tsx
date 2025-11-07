
const Sustainability = () => {
    return (
        <section className="min-w-90 h-[408px] md:h-[526px] relative flex justify-center mt-7 bg-cover lg:bg-center lg:mt-22
            bg-[url('/src/assets/images/sustain-small.jpg')] xs:bg-[url('/src/assets/images/sustain.jpg')]">
            <div className="absolute bottom-4 text-center xs:right-10 lg:right-[108px] xl:bottom-11">
                <p className='w-[318px] text-[14px] leading-[1.8] text-left lg:w-[500px] lg:text-[20px]'>Stylish Sustainability In Clothing Promotes Eco-Friendly Choices For A Greater Future</p>
                <div className='text-end'>
                    <button className="w-[152px] h-10 mt-8 border-none bg-primary text-[14px] cursor-pointer xl:w-[182px]">Sustainability</button>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;