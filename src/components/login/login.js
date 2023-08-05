import { useState } from "react"
import Style from "./login.module.css"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login=()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleLogin=async()=>{

        let result = await fetch("https://shiny-handkerchief-duck.cyclic.app/login",{
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user.email))
            localStorage.setItem("token", JSON.stringify(result.auth))

             navigate("/dashboard")

        } else {
            alert("Please enter correct credentials")

        }
        console.log(result, "receive login result")


    }



    return(
        <>
          {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="toast-container"
            /> */}
         <div className={Style.container}>
            <div className={Style.loginimg}></div>
           
            <div className={Style.login}>
            <div className={Style.logincontain}>
                <div className={Style.logo}></div>
                 
                 <div className={Style.saitext}>
                    <h1>SAI</h1>
                    <h2>NCSSR</h2>
                    <p>Welcome Back !</p>
                 </div>

                 <lable>Username</lable>
                 <input type="text" placeholder="Enter a User Name"  value={email} onChange={((e)=> setEmail(e.target.value))}></input>

                 <lable>Password</lable>
                 <input type="text" placeholder="Enter Password" value={password} onChange={((e)=>setPassword(e.target.value))}></input>
                 <button onClick={handleLogin}>Login</button>


         </div>  

         </div>
     </div>
        </>
    )



}

export default Login