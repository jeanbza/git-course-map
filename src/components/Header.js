import React from 'react'
import {states} from '../courses'

// emojis here - don't delete whitespace next to a tags
export default ({filters, handleClick}) => (
  <div className="header">
    <div className="header--left">
      <input type="checkbox" checked={filters[states.CURRENT]} onChange={_ => handleClick(states.CURRENT)}/>
      <label onClick={_ => handleClick(states.CURRENT)}>Currently offered</label>
      <input type="checkbox" checked={filters[states.PREVIOUS]} onChange={_ => handleClick(states.PREVIOUS)}/>
      <label onClick={_ => handleClick(states.PREVIOUS)}>Previously offered</label>
      <input type="checkbox" checked={filters[states.FUTURE]} onChange={_ => handleClick(states.FUTURE)}/>
      <label onClick={_ => handleClick(states.FUTURE)}>Future planned</label>
    </div>
    <div className="header--right">
      🍻 <a target="_blank" href="https://www.patreon.com/user?u=274157">Buy me a beer!</a>
      📝 <a target="_blank" href="https://github.com/jadekler/git-course-map/issues">Suggestions/feedback</a>
      ✨ <a target="_blank" href="https://github.com/jadekler/git-course-map">Star/fork this on github!</a>
    </div>
  </div>
)
