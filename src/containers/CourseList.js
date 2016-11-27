import {connect} from 'react-redux'
import CourseList from '../components/CourseList'
import {clickCheckbox} from '../actions/actions'

const byGroupId = (course, group) => {
  return group.courses.includes(course.code)
}

const byStateFilter = (course, filters) => {
  return filters[course.state]
}

const mapStateToProps = (state, ownProps) => {
  const {courses, specializations, filters} = state
  const {groupId} = ownProps

  if (groupId !== undefined) {
    const group = specializations
      .map(s => s.required)
      .reduce((a, b) => a.concat(b)) // flatten array of arrays
      .find(r => r.id === groupId)

    return {
      courses: courses
        .filter(course => byGroupId(course, group))
        .filter(course => byStateFilter(course, filters))
    }
  } else {
    return {
      courses: courses
        .filter(course => byStateFilter(course, filters))
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: courseCode => dispatch(clickCheckbox(courseCode))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList)