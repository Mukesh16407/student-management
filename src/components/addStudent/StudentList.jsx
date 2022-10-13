import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './studentlist.css'

export const StudentList =()=>{
    const dispatch = useDispatch();
    const { data: { loading, studentData } } = useSelector(store => store.student);
    
    const [sortName, setName] = useState("ascending_order");
    const [sortAge, setAge] = useState("ascending_order");

    return (
        <>
         <div className="student-heading">
             <h4>Students Details</h4>
        </div>
        <div className="student-table">
            <div>

            </div>

        </div>
        </>
       
    )
}