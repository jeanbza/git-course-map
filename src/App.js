import '../stylesheets/app.scss' // required for wepback to build css

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import courses from './reducers/courses'
import CoursesApp from './components/CoursesApp'

let store = createStore(courses)

render(
  <Provider store={store}>
    <CoursesApp />
  </Provider>,
  document.getElementById('root')
)