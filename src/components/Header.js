import React from 'react'

// emojis here - don't delete whitespace next to a tags
export default ({filters, handleClick}) => (
  <div className="header">
    <div className="header--left">
      <input type="checkbox" checked={filters.current} onChange={_ => handleClick('current')}/>
      <label>Currently offered</label>
      <input type="checkbox" checked={filters.previous} onChange={_ => handleClick('previous')}/>
      <label>Previously offered</label>
      <input type="checkbox" checked={filters.future} onChange={_ => handleClick('future')}/>
      <label>Future planned</label>
    </div>
    <div className="header--right">
      🍻 <a target="_blank" href="https://www.patreon.com/user?u=274157">Buy me a beer!</a>
      📝 <a target="_blank" href="https://github.com/jadekler/git-course-map/issues">Suggestions/feedback</a>
      ✨ <a target="_blank" href="https://github.com/jadekler/git-course-map">Star/fork this on github!</a>
    </div>
  </div>
)
