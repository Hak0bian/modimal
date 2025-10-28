import sustainImg from '../../assets/images/sustainability.jpg';

const Sustainability = () => {
    return (
        <section className="max-w-[1440px] h-[526px] relative mx-auto mt-[100px] bg-cover bg-left" style={{backgroundImage: `url(${sustainImg})`}}>
            <div className="absolute top-[360px] right-[108px] w-[495px] text-[20px] leading-[1.8]">
                <p>Stylish sustainability in clothing promotes eco-friendly choices for a greater future</p>
                <div className='text-end'>
                    <button className="btn mt-[12px]">Sustainability</button>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;