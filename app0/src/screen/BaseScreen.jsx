import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const BaseScreen = () => {
    return (
        <>
        <NavBar/>
        <main className="container">
            <Outlet/>
        </main>
        </>
    );
};

export default BaseScreen;