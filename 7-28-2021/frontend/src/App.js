import React from 'react';
import './App.css';
import Questions from './components/Questions';
import QuestionForm from './components/QuestionForm';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <QuestionForm />
          <Questions />
        </header>
      </div>
    </Provider>
  );
}

export default App;
