import {connect} from 'react-redux'
import CourseList from '../components/CourseList'
import {clickCheckbox} from '../actions/actions'

const filteredCourses = (courses, specializations, groupId) => {
  if (groupId !== undefined) {
    const group = specializations
      .map(s => s.required)
      .reduce((a, b) => a.concat(b)) // flatten array of arrays
      .find(r => r.id === groupId)
    
    return courses.filter(c => group.courses.includes(c.code))
  }

  return courses
}

const mapStateToProps = (state, ownProps) => {
  const {groupId} = ownProps
  return {
    courses: filteredCourses(state.courses, state.specializations, groupId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: courseCode => {
      dispatch(clickCheckbox(courseCode))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList)