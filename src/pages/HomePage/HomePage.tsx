import { Header, BestSellers, Collection, Sustainability, FollowUs, ModiweekSlider } from "../../components"
import Test from "../../components/Test/Test"


const HomePage = () => {
    return (
        <section>
            <Header />
            <BestSellers />
            <Collection />
            <ModiweekSlider />
            <Test />
            <Sustainability />
            {/* <FollowUs /> */}
        </section>
    )
}

export default HomePage