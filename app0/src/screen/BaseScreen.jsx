import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const BaseScreen = () => {
    return (
        <>
            <Header/>
            <main className="container">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default BaseScreen;