import React from 'react'

import Course from './Course'
import courses from '../courses'

import Specialization from './Specialization'
import specializations from '../specializations'

const coursesList = courses
  .sort((a, b) => a.code.localeCompare(b.code))
  .map(course => <Course key={course.code} code={course.code} name={course.name}/>)
const specializationList = specializations
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(specialization => <Specialization key={specialization.name} name={specialization.name}/>)

export default () => (
  <div id="app">
    <div id="courses">
      <h2>Courses</h2>
      {coursesList}
    </div>
    <div id="specializations">
      <h2>Specializations</h2>
      {specializationList}
    </div>
  </div>
)