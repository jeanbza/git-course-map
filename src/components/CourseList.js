import React from 'react'

import Course from './Course'

const courseList = (courses, clickHandler) => {
  return courses
    .sort((a, b) => a.code.localeCompare(b.code))
    .map(course => <Course key={course.code}
                           course={course}
                           taken={false} // TODO
                           clickHandler={clickHandler} // TODO
    />)
}

export default ({courses, clickCheckbox}) => {
  return (
    <div>
      {courseList(courses, clickCheckbox)}
    </div>
  )
}