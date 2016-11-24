import React from 'react'

import CourseList from '../containers/CourseList'

import Specialization from './Specialization'
import specializations from '../specializations'

class CourseApp extends React.Component {
  render() {
    return (
      <div id="app">
        <div id="courses">
          <h2>Courses</h2>
          <CourseList />
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

  specializationList() {
    return specializations
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(specialization => <Specialization key={specialization.name} specialization={specialization}/>)
  }
}

export default CourseApp