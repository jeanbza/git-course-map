import React from 'react'

import RequiredGroup from './RequiredGroup'

export default ({checkedCourses, specialization, courseClickHandler}) => {
  const {name, required} = specialization
  const groups = required.map((group, i) =>
    <RequiredGroup key={i}
                   checkedCourses={checkedCourses}
                   type={group.type}
                   groupCourses={group.courses}
                   courseClickHandler={courseClickHandler}/>
  )

  return (
    <div>
      <strong>{name}</strong>
      <div className="inset">{groups}</div>
    </div>
  )
}