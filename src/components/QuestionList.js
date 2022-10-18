import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {


  const questionsLi =questions.map(question => <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion}></QuestionItem>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsLi}</ul>
    </section>
  );
}

export default QuestionList;
