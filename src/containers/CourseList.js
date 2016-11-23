import {connect} from 'react-redux'
import CourseList from '../components/CourseList'
import {clickCheckbox} from '../actions/actions'

const filteredCourses = (courses, groupName) => {
  if (groupName) {
    return []
  }

  return courses
}

const mapStateToProps = (state, ownProps) => {
  const {groupId} = ownProps
  return {
    courses: filteredCourses(state, groupId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickCheckbox: courseCode => {
      dispatch(clickCheckbox(courseCode))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList)

export default VisibleTodoList