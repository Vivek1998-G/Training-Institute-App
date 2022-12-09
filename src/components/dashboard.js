import React from 'react';
import { Link } from "react-router-dom";


  function Dashboard () {
return(
<div>
    <h1>welcome to our institute</h1>
  <ul>
  
    <li> <Link to="/dashboard/student">Student</Link></li> 
    <li> <Link to="/dashboard/course">Course</Link></li> 
    <li> <Link to="/dashboard/add-student">Add-Student</Link></li> 
 <li> <Link to="/dashboard/add-course">Add-course</Link></li> 

</ul>
</div>

  )
}
export default Dashboard;

