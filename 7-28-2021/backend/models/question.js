// ODM object dada map
const mongoose = require('mongoose'); //mongoose is obj

const Schema = mongoose.Schema;

const QuestionSchema = Schema({ 
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  live: {
    type: String,
  },
  repo: {
    type: String
  }
},{timestamp: true})

module.exports = Question = mongoose.model('Question', QuestionSchema);
              //Question is a class

