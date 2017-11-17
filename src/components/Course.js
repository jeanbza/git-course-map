import React from 'react'

import states from '../constants/states'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {buttonClicked: false}
  }

  render() {
    const {course, handleClick} = this.props
    const {code, name, moreInformation, state, taken} = course

    return (
      <div className={this.className(state)}>
        <input type="checkbox" checked={taken === true} onChange={_ => handleClick(code)}/>
        <div className="course--indicator"></div>
        <span className="course--description" onClick={_ => handleClick(code)}>{code}: {name}</span>
        {this.button(moreInformation, this.handleMoreClick.bind(this))}
        {this.extras(this.state.buttonClicked, moreInformation)}
      </div>
    )
  }

  handleMoreClick() {
    this.setState({buttonClicked: !this.state.buttonClicked})
  }

  className(state) {
    switch (state) {
      case states.CURRENT:
        return 'course course--current'
      case states.PREVIOUS:
        return 'course course--previous'
      case states.FUTURE:
        return 'course course--future'
    }
  }

  button(moreInformation, clickHandler) {
    const buttonText = this.state.buttonClicked ? 'Less' : 'More'
    return moreInformation ?
      <small className="more" onClick={clickHandler}>{buttonText}</small> :
      <div></div>
  }

  extras(buttonClicked, moreInformation) {
    if (buttonClicked && moreInformation) {
      return (
        <div className="inset">
            <a href={moreInformation.reviewLink} target="_blank">Course reviews</a>
            <a href={moreInformation.wikiLink} target="_blank">Course Wiki</a>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Course
