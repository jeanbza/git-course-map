import allCourses from '../courses'

const defaultCoursesDecorator = allCourses =>
  allCourses.map(course =>
    Object.assign({taken: false, shown: true}, course))

const courseReducer = (course, action) => {
  if (course.code != action.courseCode) {
    return course
  }

  switch (action.type) {
    case 'CLICK_CHECKBOX':
      const newCourse = Object.assign({}, course)
      newCourse.taken = !newCourse.taken
      return newCourse
    default:
      return course
  }
}

export default (state = defaultCoursesDecorator(allCourses), action) => {
  const newState = Object.assign([], state)
  return newState.map(course => courseReducer(course, action))
}