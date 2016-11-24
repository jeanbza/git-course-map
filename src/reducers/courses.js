import courses from '../courses'

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

export default (state = courses, action) => {
  const newState = Object.assign([], state)
  return newState.map(course => courseReducer(course, action))
}