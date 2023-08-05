import Styled from "./navbar.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const auth = localStorage.getItem("user")
    const name = JSON.parse(auth)
    console.log(name, "received name from parse");
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem("user");
        navigate("/")
    }

    
    return (
        <>
            <div className={Styled.navbar}>

                <div className={Styled.logo}></div>
                <div>Home</div>
                 <div>About</div>
                 <div style={{color:"green"}}>{`Welcome ${name}`} </div>
                 <div className={Styled.logOut} onClick={logOut}>Logout</div>

               </div>

        </>
    )



}

export default Navbar;