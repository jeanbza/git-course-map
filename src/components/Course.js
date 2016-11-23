import React from 'react'

class Course extends React.Component {
  constructor(props) {
    super(props)
    this.state = {buttonClicked: false}
  }

  render() {
    const {course, clickHandler} = this.props
    const {code, name, moreInformation, state, taken} = course

    return (
      <div className={this.className(state)}>
        <input type="checkbox" checked={taken === true} onClick={_ => clickHandler(code)}/>
        {code}: {name}
        {this.button(moreInformation, this.handleMoreClick.bind(this))}
        {this.extras(this.state.buttonClicked, moreInformation)}
      </div>
    )
  }

  handleMoreClick() {
    this.setState({buttonClicked: !this.state.buttonClicked})
  }

  className(state) {
    return state === 'OFFERED' ? 'course' : 'course course--not-offered'
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
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default Course