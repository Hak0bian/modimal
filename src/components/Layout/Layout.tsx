import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import { Footer } from ".."

const Layout = () => {
    return (
        <section className='min-w-[360px] max-w-[1440px] xl:w-[1440px] m-auto'>
            <Navigation />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout