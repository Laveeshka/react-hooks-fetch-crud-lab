import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    //delete from json server
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteQuestion(question));
  }

  function handleCorrectIndexChange(e){
    //add fetch request
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: parseInt(e.target.value),
      })
    })
      .then(res => res.json())
      .then(updatedQuestion => {
        console.log("Updated question: ", updatedQuestion);
        onUpdateQuestion(updatedQuestion);
      })
  }
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectIndexChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
