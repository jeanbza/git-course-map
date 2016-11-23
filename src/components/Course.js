import React from 'react'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMoreNotLess: false}
  }

  render() {
    const {course, taken, clickHandler} = this.props
    const {code, name, more, state} = course

    const className = state === 'OFFERED' ? 'course' : 'course course--not-offered'
    const buttonText = this.state.showMoreNotLess ? 'Less' : 'More'
    const button = more ?
      <small className="more" onClick={this.handleMoreClick.bind(this)}>{buttonText}</small> :
      <div></div>

    return (
      <div className={className}>
        <input type="checkbox" checked={taken} onClick={clickHandler}/>
        {code}: {name}
        {button}
        {this.extras(this.state.showMoreNotLess, more)}
      </div>
    )
  }

  handleMoreClick() {
    this.setState({showMoreNotLess: !this.state.showMoreNotLess})
  }

  extras(showMoreNotLess, more) {
    if (showMoreNotLess && more) {
      return (
        <div className="inset">
          <a href={more.reviewLink} target="_blank">Course reviews</a>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Course