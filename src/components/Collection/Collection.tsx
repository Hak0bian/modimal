
import './Collection.css'

const Collection = () => {
    return (
        <section className='collectionSec'>
            <div className="titleDiv">
                <h2>Collection</h2>
            </div>

            <div className="collectionsDiv">
                <div className="leftCollDiv">
                    <div className="collectionOne">
                        <button className='collBtn btn'>Boluses</button>
                    </div>
                    <div className="collectionTwo">
                        <button className='collBtn btn'>Pants</button>
                    </div>
                </div>

                <div className="rightCollDiv">
                    <div className="collectionThree">
                        <button className='collBtn btn'>Dresses</button>
                    </div>
                    <div className="collectionFour">
                        <button className='collBtn btn'>Outwear</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection