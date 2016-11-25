import '../stylesheets/app.scss' // required for wepback to build css

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'

import courses from './reducers/courses'
import specializations from './reducers/specializations'
import filters from './reducers/filters'
import CoursesApp from './components/CoursesApp'

const rootReducer = combineReducers({courses, specializations, filters})
let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <CoursesApp />
  </Provider>,
  document.getElementById('root')
)