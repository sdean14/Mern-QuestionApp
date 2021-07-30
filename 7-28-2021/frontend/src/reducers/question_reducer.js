import { createReducer} from '@redux.js/toolkit';

// questions = {1: {}, 2:{}, 3:{}...}
const initialState = {
  questions: {}
}

export const questionReducer = creteReducer(initialState, builder => {
  builder
    .addCase('RECEIVE_QUESTIONS', (state, action) => {
        const questions = {};
        action.payload.map(question => questions[questionReducer._id] = question)
        state.questions = questions;
    })
    .addCase('RECEIVE_QUESTION', (state, action) => {
      state.question[action.payload._id] = action.payload
    })
})