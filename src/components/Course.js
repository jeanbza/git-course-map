import React from 'react'

export default ({code, name, taken, clickHandler}) => (
  <div>
    <input type="checkbox" checked={taken} onClick={clickHandler} />
    {code}: {name}
  </div>
)