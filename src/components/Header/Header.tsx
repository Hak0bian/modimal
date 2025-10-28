import headerImg from '../../assets/images/header-img.png';

const Header = () => {
    return (
        <header className="max-w-[1440px] h-[600px] bg-cover bg-left relative mx-auto" style={{backgroundImage: `url(${headerImg})`}}>
            <div className="absolute top-[300px] left-[108px] w-[295px]">
                <p className="h-[130px] text-[34px] leading-[1.8] font-['sansmt'] italic mb-[28px]">
                    Elegance in simplicity, Earth’s harmony
                </p>
                <button className="btn">New In</button>
            </div>
        </header>
    )
}

export default Header