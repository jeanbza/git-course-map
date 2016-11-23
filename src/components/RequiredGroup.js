import React from 'react'

import CourseList from '../containers/CourseList'

export default ({type}) => {
  return (
    <div>
      {type}
      <div className="inset"><CourseList /></div>
    </div>
  )
}