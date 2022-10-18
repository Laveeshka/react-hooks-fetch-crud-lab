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

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;
