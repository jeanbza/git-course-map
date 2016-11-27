import React from 'react'

import Header from '../containers/Header'
import CourseList from '../containers/CourseList'
import SpecializationList from '../containers/SpecializationList'

export default () => (
  <div>
    <Header />
    <div id="foreword">
      <h2>Specialization planner</h2>
      See how close you are to completing specializations by clicking courses that you've taken
      and referencing against requirements on the right.
    </div>
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
  </div>
)