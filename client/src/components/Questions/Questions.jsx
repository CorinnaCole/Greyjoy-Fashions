import React, { useState, useEffect } from 'react';
import QuestionFeed from './QuestionFeed.jsx';

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState(false);

<<<<<<< HEAD
=======
  const getCurrentQuestions = () => {
    axios.get('/qa/questions/', {
      params: {
        'id': props.productId
      }
    })
      .then(results => {
        // console.log('questions: ', results.data.results);
        setQuestions(results.data.results);
      })
      .catch(err => {
        console.log('There is an error getting questions from server ', err);
      });
  };

  useEffect(() => {
    getCurrentQuestions();
  }, []);

  const loadMoreQuestions = () => {
    setMoreQuestions(!moreQuestions);
  };

>>>>>>> 9a7cab498bc6bab8a485c08fbe860bc3fb3f0e98
  return (
    <div id="questions">
      <div>Q&A Widget to go here!</div>
      <form class="question-search-form">
        <input class="questions-search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
        <button class="question-search-button" type="submit">
          <img src="search.png"/>
        </button>
      </form>
      <QuestionFeed questions={questions} moreQuestions={moreQuestions} />
      {(questions[0] && questions.length > 2) && !moreQuestions && <button onClick={loadMoreQuestions}>MORE ANSWERED QUESTIONS</button>}
      {(questions[0] && questions.length > 2) && moreQuestions && <button onClick={loadMoreQuestions}>LESS ANSWERED QUESTIONS</button>}
      <button>ADD A QUESTION +</button>
    </div>
  );
};

export default Questions;