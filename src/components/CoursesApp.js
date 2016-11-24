import React from 'react'

import CourseList from '../containers/CourseList'
import SpecializationList from '../containers/SpecializationList'

export default () => (
  <div id="app">
    <div id="courses">
      <h2>Courses</h2>
      <CourseList />
    </div>
    <div id="specializations">
      <h2>Specializations</h2>
      <SpecializationList />
    </div>
  </div>
)