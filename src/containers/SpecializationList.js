import {connect} from 'react-redux'
import SpecializationList from '../components/SpecializationList'

const mapStateToProps = (state, ownProps) => {
  return {
    specializations: state.specializations
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecializationList)