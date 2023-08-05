import Style from "./login.module.css"
const Login=()=>{

    return(
        <>
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
                 <input type="text" placeholder="Enter a User Name" ></input>

                 <lable>Password</lable>
                 <input type="text" placeholder="Enter Password"></input>
                 <button>Login</button>


         </div>  

         </div>
     </div>
        </>
    )



}

export default Login