import "./login.css"
const Login=()=>{

    return(
        <>
         <div className="container">
            <div className="login-img"></div>
           
            <div className="login">
            <div className="login-contain">
                <div className="logo"></div>
                 
                 <div className="sai-text">
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