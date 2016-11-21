import React from 'react'

import Course from './Course'

export default ({allCourses, checkedCourses, type, groupCourses, courseClickHandler}) => {
  const courseNamesByCode = allCourses.reduce((map, course) => {
    map[course.code] = course.name
    return map
  }, {})
  const courses = groupCourses.map(courseCode => <Course key={courseCode}
                                                         code={courseCode}
                                                         taken={checkedCourses[courseCode]}
                                                         name={courseNamesByCode[courseCode]}
                                                         clickHandler={_ => courseClickHandler(courseCode)}/>)
  return (
    <div>
      {type}
      <div>
        {courses}
      </div>
    </div>
  )
}