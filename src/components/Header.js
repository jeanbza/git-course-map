import React from 'react'

export default () => (
  <div className="header">
    <div className="header--left">
      <input type="checkbox" />
      <label>Currently offered</label>
      <input type="checkbox" />
      <label>Previously offered</label>
      <input type="checkbox" />
      <label>Future planned</label>
    </div>
    <div className="header--right">
      🍻 <a target="_blank" href="https://www.patreon.com/user?u=274157">Buy me a beer!</a>
      📝 <a target="_blank" href="https://github.com/jadekler/git-course-map/issues">Suggestions/feedback</a>
      ✨ <a target="_blank" href="https://github.com/jadekler/git-course-map">Star/fork this on github!</a>
    </div>
  </div>
)
