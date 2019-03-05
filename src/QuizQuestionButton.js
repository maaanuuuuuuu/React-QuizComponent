import React, { Component } from 'react'


class QuizQuestionButton extends Component {
  constructor(props) {
    super(props)
    this.state = { button_text : 1 }
  }
  render(h) {
    return (
      <li>
        <button>{ this.state.button_text }</button>
      </li>
    )
  }
}

export default QuizQuestionButton