import { Outlet } from "react-router-dom";
import NavBar from "./Shared/Nav/NavBar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-head max-w-screen-xl mx-auto my-2">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;