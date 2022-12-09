
import './App.css';
import { React } from 'react';
import { Auth } from './components/Auth';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard';
import { Stud } from './components/student';
import { Course } from './components/course';
import { AddCourse } from './components/Add-course';
import { AddStudent } from './components/Add-stud';
import { io } from 'socket.io-client';
function App() {
  const socket=io("http://localhost:3000");
  socket.on("connection");
    
  socket.on("generateID", (result) =>{
  
    console.log("socketID", result);
  });
  

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} /></Routes>
        <Routes>  <Route exact path="/dashboard" element={<Dashboard />} /></Routes>
        <Routes>   <Route exact path="/dashboard/course" element={<Course />} /></Routes>
        <Routes>    <Route exact path="/dashboard/student" element={<Stud />} /></Routes>
        <Routes>   <Route exact path="/dashboard/add-student" element={<AddStudent />} /></Routes>
        <Routes>  <Route exact path="/dashboard/add-course" element={<AddCourse />} />
        </Routes></Router>
    </>);
}


export default App;
