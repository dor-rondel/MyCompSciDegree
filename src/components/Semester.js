import React, { Component } from 'react'
import Course from './Course'

export default class Semester extends Component {
    state = {
        data: []
    }

    componentDidMount = () => {
        fetch("./../courses.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }).then(res => res.json())
            .then(data => this.setState({ data }));
    }

    render() {
        let courses = <li>Loading course data...</li>

        const courseId = this.props.match.params.numeral;

        // finished ajax request
        if (this.state.data.length !== 0) {
            // index of state data based off endpoint param
            courses = this.state.data[courseId].map(course => {
                return (
                    <li>
                        <Course info={course} key={courseId} />
                    </li>
                )
            })
        }

        return (
            <ul>
                { courses }
            </ul>
        )  

    }
}