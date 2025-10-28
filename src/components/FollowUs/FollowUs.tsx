import follow1 from '../../assets/images/follow1.jpg';
import follow2 from '../../assets/images/follow2.jpg';
import follow3 from '../../assets/images/follow3.jpg';
import follow4 from '../../assets/images/follow4.jpg';
import follow5 from '../../assets/images/follow5.jpg';

const FollowUs = () => {
    return (
        <section className="max-w-[1224px] mx-auto">
            <div className="titleDiv">
                <h2>Follow Us @Modimal</h2>
            </div>

            <div className="flex">
                <div className="flex">
                    <div className="w-[604px] h-[750px] bg-cover bg-left" style={{backgroundImage: `url(${follow1})`}}></div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="w-[310px] h-[375px] bg-cover bg-left" style={{backgroundImage: `url(${follow2})`}}></div>
                    <div className="w-[310px] h-[375px] bg-cover bg-left" style={{backgroundImage: `url(${follow3})`}}></div>
                    <div className="w-[310px] h-[375px] bg-cover bg-left" style={{backgroundImage: `url(${follow4})`}}></div>
                    <div className="w-[310px] h-[375px] bg-cover bg-left" style={{backgroundImage: `url(${follow5})`}}></div>
                </div>
            </div>
        </section>
    );
};

export default FollowUs;