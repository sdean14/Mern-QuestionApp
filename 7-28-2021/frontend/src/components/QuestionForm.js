import React, { useState } from 'react';
import { connect } from 'react-redux'
import { submitQuestion } from '../actions/question_actions'

const QuestionForm = ({ submit }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //when submitting a form the page refreshes by default
    console.log({ name, conetnt })
    submit({name, content})
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type='text'
          pleceholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          row='3'
          placeholder='ask away...'
          value={content}
          onChange={e => setContent(e.target.value)}

        />
        <button>Submit Question</button>
      </form>
    </div>
  )
}

const mdp = dispatch => ({
  submit: question => dispatch(submitQuestion(question))
})
export default connect(null, mdp)(QuestionForm);