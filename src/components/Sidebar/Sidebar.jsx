import React from "react";
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ChatIcon from '@mui/icons-material/Chat';
import { useLocation, useNavigate } from "react-router-dom";

import { closeIcon } from "../utility";


export const Sidebar =({ showSidebar, showSideBar  })=>{
    
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return(
        <>
         <div className="show__side-bar"  style={showSidebar === "visible" ?{ display: "block" } : { display: "none" }}>
           <img src={closeIcon}
            alt={closeIcon}
            width="20"
            onClick={showSideBar}/>

           <p style={pathname === "/home" ?
            { backgroundColor: "#D1DCDE" } : { backgroundColor: "#FFFFFF" }}
                    onClick={() => { 
                        navigate("/adminhome")
                        showSideBar() }}
            > <span><HomeIcon /> </span>Home   

            </p>
            <p style={pathname === "/addstudent" ? { backgroundColor: "#D1DCDE" } : { backgroundColor: "#FFFFFF" }}
                    onClick={() => { 
                     navigate("/addstudent")
                     showSideBar() }}
            ><span><PeopleIcon /> </span> Add Student</p>
            <p style={pathname === "/addcontest" ?{ backgroundColor: "#D1DCDE" } : { backgroundColor: "#FFFFFF" }}
                    onClick={() => { 
                    navigate("/addcontest")
                    showSideBar() }}
             ><span><NoteAddIcon /> </span> Add Contest</p>
             <p style={pathname === "/chat" ?{ backgroundColor: "#D1DCDE" } : { backgroundColor: "#FFFFFF" }}
                    onClick={() => { 
                    navigate("/chat")
                    showSideBar() }}
            > <span><ChatIcon /> </span>  Chat</p>

         </div>
        </>
    )
}