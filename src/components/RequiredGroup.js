import React from 'react'

import Course from './Course'

export default ({allCourses, checkedCourses, type, groupCourses}) => {
  const courseNamesByCode = allCourses.reduce((map, course) => {
    map[course.code] = course.name
    return map
  }, {})
  const courses = groupCourses.map(courseCode => <Course key={courseCode}
                                                         code={courseCode}
                                                         name={courseNamesByCode[courseCode]}/>)
  return (
    <div>
      {type}
      <div>
        {courses}
      </div>
    </div>
  )
}