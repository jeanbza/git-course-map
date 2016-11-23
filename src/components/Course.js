import React from 'react'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMoreNotLess: false}
  }

  render() {
    const {code, name, taken, clickHandler, more} = this.props
    const buttonText = this.state.showMoreNotLess ? 'Less' : 'More'
    const button = more ?
      <small className="more" onClick={this.handleMoreClick.bind(this)}>{buttonText}</small> :
      <div></div>

    return (
      <div>
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