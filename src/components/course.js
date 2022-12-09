import React from "react";
import Dashboard from "./dashboard";
 import  Axios  from "axios";
 import get  from "react-axios";
 export const Course=()=>{
  function Vivo(){
  Axios.get('http://localhost:3001/student/course')
  .then(res => show(res.data)
  ).catch(err => console.log(err))
 
function show(data) {
 console.log(data)
  let list1 = data.map((index) => {
  
    return `<tr>
    <td>${index.id}</td>
    <td>${index.course}</td>

    <td>
          <button onclick="edit(${index.id})">
              <i class="material-icons" id="edit">edit</i>
          </button>
          <button onclick="Remove(${index.id})">
              <i class="material-icons" id="delete">delete</i>
          </button>
      </td>
      </tr>`
  });
 
  document.getElementById("course-list").innerHTML = list1.join("");
}
}
  
  Vivo();
  return (
    <div>
      <Dashboard/>
      <div className='table-container'>
      <table className="table table-hover">
        <thead id="tableHead">
            <tr>
                <th>ID <i className="fa fa-caret-down _idSort" aria-hidden="true"></i>
                </th>
                <th>Course name <i className="fa fa-caret-down nameSort" aria-hidden="true"></i>
                </th>
                
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="course-list">

        </tbody>
    </table>
    </div>
  </div>
  )
}
