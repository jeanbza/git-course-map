import {connect} from 'react-redux'
import Header from '../components/Header'
import {clickFilter} from '../actions/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    filters: state.filters,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: filterId => {
      dispatch(clickFilter(filterId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)