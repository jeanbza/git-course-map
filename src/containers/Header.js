import {connect} from 'react-redux'
import Header from '../components/Header'
import {clickFilter, resetTakenCourses} from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: filterId => dispatch(clickFilter(filterId)),
    resetTakenCourses: _ => dispatch(resetTakenCourses())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)