import './Log.css'
import {react,useState} from 'react'
import{useNavigate} from 'react-router';
import Dashboard from './dashboard';


export const Log=()=>{
    const [userName,setUsername] =useState("")
    const [userPassword,setUserpassword]=useState("")
    let navigate=useNavigate()  
   function Sign(){

        if(userName==="Vivek" && userPassword === "1234"){
            console.log("log in success");
            navigate("/dashboard" ); 
        }
        else{
            console.log("falied")
        }
    }
    return(
      <div> <h1>Welcome To Tech World</h1><div className='login'>
       
    <div className='Box'>    <input type="text" value={userName} onChange={(e)=>{setUsername(e.target.value)}} required /><br></br>
        <input type="text" value={userPassword} onChange={(e)=>{setUserpassword(e.target.value)}} required /><br></br>
<button onClick={Sign} id="btn">Log In</button></div>
    </div></div>)
}