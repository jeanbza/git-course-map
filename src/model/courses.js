import rawCourses from '../constants/courses'

const coursesDecorator = allCourses =>
  allCourses.map(course =>
    Object.assign({taken: false, shown: true}, course))

export default coursesDecorator(rawCourses)