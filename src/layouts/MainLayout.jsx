import { Outlet } from "react-router"
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout() {
    return (
        <div className=" text-black bg-gray-400 p-20">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout