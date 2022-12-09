import React from "react";
import Dashboard from "./dashboard";
import './course.css'
import './student.css'
import Axios from "axios";
import { useState } from "react";
import post from "react-axios";


export const AddCourse = () => {
  const [course, setCourse] = useState("")

  function Click() {
    Axios.post('http://localhost:3001/student/course', {
      "course": course
    })
      .then(response => console.log(response)
      ).catch(err => console.log(err))
    console.log(course)
  }
  return (
    <div>
      
      <div className="container">
        <form>
          <div className="form ">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Course Name</span>
                <input type="text" placeholder="Enter Course name" required value={course} onChange={(e) => { setCourse(e.target.value) }} />
              </div>

            </div>
            <button className="submitBtn" onClick={Click}>Submit Please
            </button>
          </div>
        </form>
      </div>
    </div >

  )
}

