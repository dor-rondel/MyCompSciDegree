import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/css/Home.css'

export default class Home extends Component {
    componentDidMount = () => {
        console.log("mounted");
        // load course json 
    }

    state = {
        semesters: [
            "Fall 2015",
            "Spring 2016",
            "Fall 2016",
            "Spring 2017",
            "Fall 2017",
            "Spring 2018",
            "Fall 2018",
            "Spring 2019",
        ]
    }

    render() {
        const semestersList = this.state.semesters.map(link => {
            const url = `/semester/${this.state.semesters.indexOf(link) + 1}`

            return (
                <li>
                    <Link to={ url } className="list-item">{ link }</Link>
                </li>
            )
        })
        
        return (
            <ul className="semester-list">
                { semestersList }
            </ul>
        )
    }
}