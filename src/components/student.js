import React from 'react'
import Dashboard from './dashboard';
import './student.css'
import Axios from 'axios';
import get from 'react-axios';

function Edite(ind){
 
console.log(ind)
}
export const Stud = () => {
  // A function to display all thw values from the student table
  
  function Vivo() {
   
   Axios.get('http://localhost:3001/student')
      .then(res => show(res.data)
      ).catch(err => console.log(err))
      

     
    function show(data) {
     
     
     
     
      let list1 = data.map((index) => {
       

        return `<tr>
        <td>${index.id}</td>
        <td>${index.name}</td>
        <td>${index.address}</td>
        <td>${index.course}</td>

        <td>
              <button onClick=${Edite(index.id)}>
                  <i class="material-icons" id="edit">edit</i>
              </button>
              <button onclick="Remove(${index.id})">
                  <i class="material-icons" id="delete">delete</i>
              </button>
          </td>
          </tr>`
      });
      
      document.getElementById("students-list").innerHTML = list1.join("");
    }
  }
  Vivo();
  // to fetch the data from the url below and display using show function
  
  return (
    <div>

      <div className='table-container'>
        <table className="table table-hover">
          <thead id="tableHead">
            <tr>
              <th>ID <i className="fa fa-caret-down _idSort" aria-hidden="true"></i>
              </th>
              <th>name <i className="fa fa-caret-down nameSort" aria-hidden="true"></i>
              </th>

              <th>Adress <i className="fa fa-caret-down nameSort" aria-hidden="true"></i>
              </th>
              <th>Course <i className="fa fa-caret-down nameSort" aria-hidden="true"></i>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="students-list">

          </tbody>
        </table>
      </div>
    </div>

  )
}
