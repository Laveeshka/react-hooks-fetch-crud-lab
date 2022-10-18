import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {


  const questionsLi =questions.map(question => <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateQuestion={onUpdateQuestion}></QuestionItem>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsLi}</ul>
    </section>
  );
}

export default QuestionList;
