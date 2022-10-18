import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  //useEffect to perform a side effect of fetching questions from the API when the component first renders
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => {
        setQuestions(questions);
        console.log("Questions after loading from API: ", questions);
      });
  }, []);

  const questionsLi =questions.map(question => <QuestionItem key={question.id} question={question}></QuestionItem>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsLi}</ul>
    </section>
  );
}

export default QuestionList;
