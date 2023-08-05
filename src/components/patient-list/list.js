import { useEffect, useState } from "react"
import Navbar from "../navbar/navbar"
import Styles from "./list.module.css"
import axios from "axios"
const AllPatient = () => {

    const [data, setData]= useState([])

    useEffect(()=>{
     fetchdata()
    },[])

    const fetchdata=async()=>{
        let result = await axios("https://shiny-handkerchief-duck.cyclic.app/patient-list")
        setData(result.data)
    }
     console.log(data, "received from api")


    return (
        <> 
           <Navbar/>
            <div className={Styles.tablecontainer}>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>whats'up Number</th>
                        <th>Clinic Name</th>
                    </tr>

                    {data.map((elem,index)=>{

                        return (
                            <tr>
                                <td>{elem.first_name}</td>
                                <td>{elem.middle_name}</td>
                                 <td>{elem.last_name}</td>
                                 <td>{elem.mobile_no}</td>
                                <td>{elem.whatsapp_no}</td>
                                 <td>{elem.clinic_name}</td>

                            </tr>
                        )
                    })}
                    
                </table>

            </div>
        </>
    )




}

export default AllPatient