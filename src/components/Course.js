import React from 'react'

const Course = ({ info }) => {
    return (
        <ul className="course-card">
            <li>{ info.Title }</li>
            <li>{ info.Department }</li>
            <li>{ info.Code }</li>
            <li>{ info.Description }</li>
            <li>{ info.Reflection }</li>
        </ul>   
    )
}

export default Course;