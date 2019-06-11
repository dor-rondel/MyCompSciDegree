import React from 'react'

import './../styles/css/Course.css'

const Course = ({ info, colr, colr2 }) => {
    return (
        <div className="course-card--container">
            <div className="course-card">
                <ul className="course-card--front" style={colr}>
                    <li className="card--title">{ info.Title }</li>
                    <li className="card--dept">{ info.Department } - { info.Code }</li>
                    <li className="card--desc">Description: { info.Description }</li>
                </ul>
                <div className="course-card--back" style={colr2}>
                    <h3 className="card--reflection--title">Personal Reflection</h3>
                    <p className="card--reflection">{ info.Reflection }</p>
                </div>   
            </div>
        </div>
    )
}

export default Course;