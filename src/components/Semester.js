import React, { Component } from 'react'
import Course from './Course'

import './../styles/css/Semester.css'

export default class Semester extends Component {
    state = {
        data: [],
        darkColors: [  // all A11Y compliant colors
            "#001f3f", "#39CCCC", "#3D9970", "#85144b", 
            "#0074D9", "#2ECC40", "#01FF70", "#111111"
            
        ],
        lightColors: [ // all A11Y compliant colors
            "#FF851B", "#FF4136", "#B10DC9", "#F012BE",
            "#AAAAAA", "#DDDDDD", "#7FDBFF", "#FFDC00"
        ],
        selectedColors: new Set()
    }

    /**
     * @returns array either dark or light colors array from state 
     * with same likelihood
     * 
     * @memberof Semester
     */
    chooseArray = () => {
        return Math.floor(Math.random() * 10) <= 5 ? 
                        this.state.darkColors: 
                        this.state.lightColors;
    }

    /**
     * void function, updates state.selectedColors set with select
     * randomly generated hexadecimal color code strings
     *
     * @memberof Semester
     */
    pickColors = () => {
        let chosenArray = this.chooseArray()
        let chosenColorIdx = Math.floor(Math.random() * chosenArray.length)

        while (this.state.selectedColors.has(chosenArray[chosenColorIdx])) {
            chosenArray = this.chooseArray()
            chosenColorIdx = Math.floor(Math.random() * chosenArray.length);
        }

        const selectedColors = this.state.selectedColors.add(chosenArray[chosenColorIdx])

        this.setState({
            selectedColors
        })
    }

    /**
     * @param idx Number type integer index of hexadecimal color string in selectedColors ordered set
     * @returns object with background color and corresponding text color for course to be inserted into the DOM
     *
     * @memberof Semester
     */
    generateStyle = (idx) => {
        const chosenColors = [...this.state.selectedColors.keys()]
        const textColor = this.state.darkColors.includes(chosenColors[idx]) ? "#f7ffff" : "#000"
        return {
            "background-color": chosenColors[idx],
            "color": textColor
        }
    }

    async componentDidMount() {
        let res = await fetch("./courses.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        })
        let data = await res.json()
        this.setState({ data })
        for (let i = 0; i < 10; i++) this.pickColors();
    }

    render() {
        let courses = <li>Loading course data...</li>

        const courseId = this.props.match.params.numeral;

        // finished ajax request
        if (this.state.data.length !== 0) {
            // index of state data based off endpoint param
            courses = this.state.data[courseId].map(course => {
                let courseIdx = this.state.data[courseId].indexOf(course)
                return (
                    <li key={course.Title}>
                        <Course info={course} colr={this.generateStyle(courseIdx) } colr2={this.generateStyle(courseIdx + 5)} />
                    </li>
                )
            })
        }

        return (
            <ul className="courses-container">
                { courses }
            </ul>
        )  
    }
}