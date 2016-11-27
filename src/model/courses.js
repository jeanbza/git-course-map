import rawCourses from '../constants/courses'
import {getTakenCourses} from '../helpers/cookie'

const takenCourses = getTakenCourses()

const coursesDecorator = allCourses =>
  allCourses
    .map(course => Object.assign({taken: takenCourses.includes(course.code), shown: true}, course))

export default coursesDecorator(rawCourses)