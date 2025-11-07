import { Outlet } from "react-router-dom"
import Navigation from "../Nav/Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <section className='min-w-[360px] max-w-[1440px] sm:w-[640px] md:w-200 lg:w-5xl xl:w-[1440px] m-auto'>
            <Navigation />
            <Outlet />
            {/* <Footer /> */}
        </section>
    )
}

export default Layout