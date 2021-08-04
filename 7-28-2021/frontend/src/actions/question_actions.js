//abilityto submit form
//ability to fetch questions when mounted
//ability to read access to all the questions after they are fethched

import axios from 'axios';
import { createAction } from '@redux/toolkit';

export const receiveQuestions = createAction('RECEIVE_QUESTIONS')
export const receiveQuestion = createAction('RECEIVE_QUESTION')

export const fetchQuestions = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/questions`) //connecting back and front
    dispatch(receiveQuestions(res.data))

  } catch (err) {
    console.log('oh no error')
  }
}

export const submitQuestion = question => async dispatch => {
  try {
    const res = await axios.post(`URL`, question)
    dispatch(receiveQuestion(res.data))
  } catch (err) {
    console.log('oh no error')
  }
}



