import React from 'react'

import Course from './Course'
import courses from '../courses'

export default ({checkedCourses, type, groupCourses, courseClickHandler}) => {
  const coursesKeyedByCode = courses.reduce((map, course) => {
    map[course.code] = course
    return map
  }, {})

  const displayCourses = groupCourses.map(courseCode => {
    return <Course key={courseCode}
                   course={coursesKeyedByCode[courseCode]}
                   taken={checkedCourses[courseCode]}
                   clickHandler={_ => courseClickHandler(courseCode)}/>
  })
  return (
    <div>
      {type}
      <div className="inset"> {displayCourses}</div>
    </div>
  )
}