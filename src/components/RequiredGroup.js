import React from 'react'

import CourseList from '../containers/CourseList'

export default ({group}) => {
  const {id, type} = group
  return (
    <div>
      {type}
      <div className="inset"><CourseList groupId={id}/></div>
    </div>
  )
}