import React from 'react';
import Question from './Question'
import { fetchQuestions } from '../actions/question_actions'
import { connect } from 'react-redux'


const questions = [{ q: 'www' }, { q: 'eeee' }];
class Questions extends React.Component {

  componentDidMount() {
    //on intial mount only
    //fetch some data => ajax/fetch/axios
    this.props.fetch()
  }

  generateQuestionList() {
    return (
      questions.map((question, i) => {
        <Question
          key={`question-${i}`}
          question={question}
        />
      })
    )
  }

  render() {
    return (
      <div>
        {this.props.question[1] ? this.generateQuestionList() : 'No Question :('}
        {/* [1] because empty[]--line38-- is truthy value, itll never hit 'No question' */}
      </div>
    )
  }
}

const msp = state => ({
  questions: state.questions ? Object.values(state.questions) : []
})

const mdp = dispatch => ({
  fetch: () => dispatch(fetchQuestions())
})

export default connect(msp, mdp)(Questions);