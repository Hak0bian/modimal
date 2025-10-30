import { Outlet } from "react-router-dom"
import Navigation from "../Nav/Navigation/Navigation"
import Footer from "../Footer/Footer"

const Layout = () => {
    return (
        <section>
            <Navigation />
            <Outlet />
            <Footer />
        </section>
    )
}

export default Layout