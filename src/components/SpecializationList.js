import React from 'react'

import Specialization from './Specialization'

const specializationList = specializations => {
  return specializations
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(specialization => <Specialization key={specialization.name} specialization={specialization}/>)
}

export default ({specializations}) => {
  return (
    <div>
      {specializationList(specializations)}
    </div>
  )
}