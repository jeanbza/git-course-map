import React from 'react'

import RequiredGroup from './RequiredGroup'

export default ({courses, checkedCourses, specialization}) => {
  const {name, required} = specialization
  const groups = required.map((group, i) => <RequiredGroup key={i}
                                                           allCourses={courses}
                                                           checkedCourses={checkedCourses}
                                                           type={group.type}
                                                           groupCourses={group.courses || []}/>)

  return (
    <div>
      <strong>{name}</strong>
      {groups}
    </div>
  )
}