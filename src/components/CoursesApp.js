import React from 'react'

import Course from './Course'
import courses from '../courses'

import Specialization from './Specialization'
import specializations from '../specializations'

class CourseApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = courses.reduce((map, course) => {
      map[course.code] = false
      return map
    }, {})
  }

  render() {
    return (
      <div id="app">
        <div id="courses">
          <h2>Courses</h2>
          {this.courseList()}
        </div>
        <div id="specializations">
          <h2>Specializations</h2>
          {this.specializationList()}
        </div>
      </div>
    )
  }

  clickHandler(code) {
    const newState = {}
    newState[code] = !this.state[code]
    this.setState(newState)
  }

  courseList() {
    return courses
      .sort((a, b) => a.code.localeCompare(b.code))
      .map(course =>
        <Course key={course.code}
                course={course}
                taken={this.state[course.code]}
                clickHandler={_ => this.clickHandler(course.code)}/>)
  }

  specializationList() {
    return specializations
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(specialization =>
        <Specialization key={specialization.name}
                        checkedCourses={this.state}
                        specialization={specialization}
                        courseClickHandler={this.clickHandler.bind(this)}/>)
  }
}

export default CourseApp