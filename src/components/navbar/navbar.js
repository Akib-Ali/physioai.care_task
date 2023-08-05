import Styled from "./navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className={Styled.navbar}>

                <div className={Styled.logo}></div>
                <div>Home</div>
                 <div>About</div>
                 <div>UserNaME</div>
                 <div>Logout</div>

               </div>

        </>
    )



}

export default Navbar;