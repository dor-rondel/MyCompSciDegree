import React from 'react'

import './../styles/css/Course.css'

const Course = ({ info, colr }) => {
    return (
        <ul className="course-card" style={colr}>
            <li className="card--title">{ info.Title }</li>
            <li>{ info.Department }</li>
            <li>{ info.Code }</li>
            <li>{ info.Description }</li>
            <li>{ info.Reflection }</li>
        </ul>   
    )
}

export default Course;