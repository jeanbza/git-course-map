import React from 'react'

import Course from './Course'

const courseList = (courses, handleClick) => {
  return courses
    .sort((a, b) => a.code.localeCompare(b.code))
    .map(course => <Course key={course.code}
                           course={course}
                           taken={false}
                           handleClick={handleClick}
    />)
}

export default ({courses, handleClick}) => {
  return (
    <div>
      {courseList(courses, handleClick)}
    </div>
  )
}