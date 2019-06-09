import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/css/Home.css'

export default class Home extends Component {
    state = {
        semesters: [
            "I - Fall 2015",
            "II - Spring 2016",
            "III - Fall 2016",
            "IV - Spring 2017",
            "V - Fall 2017",
            "VI - Spring 2018",
            "VII - Fall 2018",
            "VIII - Spring 2019",
            "AP Courses"
        ]
    }

    render() {
        const semestersList = this.state.semesters.map(link => {
            const url = `/semester/${this.state.semesters.indexOf(link) + 1}`

            return (
                <li className="list-item" key={ this.state.semesters.indexOf(link) }>
                    <Link to={ url }>{ link }</Link>
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