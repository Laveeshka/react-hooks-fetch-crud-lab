import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
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

  //callback function to pass as prop to QuestionForm component to add a new question to state
  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion]);
  }

  //callback function to pass as prop to QuestionList and then drill down to QuestionItem in order to delete a question from state
  function handleDeleteQuestion(deletedQuestion){
    console.log("Deleted question: ", deletedQuestion);
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  //callback function to pass as prop to QuestionList and then drill down to QuestionItem in order to update a question in state
  function handleUpdateQuestion(updatedQuestion){
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id){
        return updatedQuestion;
      }
      else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>}
    </main>
  );
}

export default App;
