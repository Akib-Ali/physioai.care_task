import { Route, Routes } from "react-router-dom"
import Login from "../login/login"
import AllPatient from "../patient-list/list"

const AllRoute=()=>{

    return(
        <>
        
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<AllPatient/>}/>
        </Routes>
        </>
    )



}

export default AllRoute