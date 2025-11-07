
const Header = () => {
    return (
        <header className="w-full h-[550px] lg:h-[600px] bg-cover relative m-auto bg-left bg-[url('../../src/assets/images/header-small.png')] 
            xs:bg-[url('/src/assets/images/header-md.png')]  md:bg-[url('/src/assets/images/header-big.png')]">
            <div className="absolute top-[392px] left-5 w-[172px] xs:w-[295px] xs:top-[340px] xl:top-[300px] lg:left-10 xl:left-[108px]">
                <p className="h-[70px] text-[20px] leading-[1.8] font-['sansmt'] italic mb-8 xl:mb-0 xs:text-[28px] xl:h-[130px] xl:text-[34px]">
                    Elegance in simplicity, Earth’s harmony
                </p>
                <button className="w-17 h-10 border-none bg-primary text-[14px] cursor-pointer sm:w-[184px] xs:mt-7">New In</button>
            </div>
        </header>
    )
}

export default Header