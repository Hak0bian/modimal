import coll1 from '../../assets/images/collection1.png';
import coll2 from '../../assets/images/collection2.png';
import coll3 from '../../assets/images/collection3.png';
import coll4 from '../../assets/images/collection4.jpg';

const Collection = () => {
    return (
        <section className="max-w-[1224px] mx-auto">
            <div className="titleDiv">
                <h2>Collection</h2>
            </div>
            
            <div className="flex gap-[24px]">
                {/* Left column */}
                <div className="flex flex-col gap-[64px] w-[600px]">
                    <div className="relative h-[518px] bg-cover bg-left" style={{backgroundImage: `url(${coll1})`}}>
                        <button className="btn absolute bottom-[16px] right-[16px]"> Boluses </button>
                    </div>
                    <div className="relative h-[837px] bg-cover bg-left" style={{backgroundImage: `url(${coll2})`}}>
                        <button className="btn absolute bottom-[16px] right-[16px]"> Pants </button>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-[144px] w-[600px]">
                    <div className="relative h-[840px] bg-cover bg-left" style={{backgroundImage: `url(${coll3})`}}>
                        <button className="btn absolute bottom-[16px] left-[16px]"> Dresses </button>
                    </div>
                    <div className="relative h-[435px] bg-cover bg-left" style={{backgroundImage: `url(${coll4})`}}>
                        <button className="btn absolute bottom-[16px] right-[16px]"> Outwear </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;