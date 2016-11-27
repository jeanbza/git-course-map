import React from 'react'

import RequiredGroup from './RequiredGroup'

export default ({specialization}) => {
  const {name, required} = specialization
  const groups = required.map((group, i) => <RequiredGroup key={i} group={group}/>)

  return (
    <div>
      <strong>{name}</strong>
      <div className="inset">{groups}</div>
    </div>
  )
}