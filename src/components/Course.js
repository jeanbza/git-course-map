import React from 'react'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showMore: false}
  }

  render() {
    const {code, name, taken, clickHandler, reviewLink} = this.props
    const buttonText = this.state.showMore ? 'Less' : 'More'

    return (
      <div>
        <input type="checkbox" checked={taken} onClick={clickHandler}/>
        {code}: {name}
        <small className="more" onClick={this.handleMoreClick.bind(this)}>{buttonText}</small>
        {this.extras(this.state.showMore, reviewLink)}
      </div>
    )
  }

  handleMoreClick() {
    this.setState({showMore: !this.state.showMore})
  }

  extras(showMore, reviewLink) {
    console.log(showMore)
    if (showMore) {
      return (
        <div className="inset">
          <a href={reviewLink} target="_blank">Course reviews</a>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Course