import React from "react";
import Dashboard from "./dashboard";
import './student.css'
import { useState,useEffect } from "react";
import  Axios from "axios";
import  Post  from "react-axios";


export const AddStudent = () => {
  const [address, setAdress] = useState("")
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
 
  
    function Click(){
   Axios.post('http://localhost:3001/student',{
    "name":name,"address":address,"course":course
   } )
      .then(response => console.log(response)
      ).catch(err=>console.log(err));
  }
  
  return (
    <div>
      <div className="container">
        <form>
          <div className="form ">
            <div className="details personal">
              <span className="title">Student Details</span>

              <div className="fields">
                <div className="input-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" value={name}  onChange={(e)=>{setName(e.target.value)}} required />
                </div>
                <div className="input-field">
                  <label>Adress</label>
                  <input type="text" placeholder="Enter course ID to register" value={address} onChange={(e)=>{setAdress(e.target.value)}} required />
                </div>
                <div className="input-field">
                  <label>Course</label>
                  <input type="text" placeholder="Enter course ID to register" value={course} onChange={(e)=>{setCourse(e.target.value)}} required />
                </div>
              </div>
              <button onClick={Click} >Submit please</button>
              <hr />

            </div>



          </div>        </form>
      </div>


    </div>
  )
}
